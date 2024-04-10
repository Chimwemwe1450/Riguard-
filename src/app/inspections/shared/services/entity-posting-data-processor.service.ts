import { Injectable } from '@angular/core';

import { EntityPostingService } from './entity-posting.service';
import { SyncStatsService } from '../../../shared/services/sync-stats.service';
import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { ImagePostingService } from './image-posting.service';
import { VisualGeneric } from '../../visual-generic-view/visual-generic.model';

@Injectable({
  providedIn: 'root'
})
export class EntityPostingDataProcessorService {

  constructor(
    private _entityPostingService: EntityPostingService,
    private _syncStatsService: SyncStatsService,
    private _dataStorage: DataStorageService,
    private _imagePosting: ImagePostingService
  ) { }

  public async dataProcessor<T>(incomingData: T, cqmId: string, riserModel: string, recordName: string): Promise<boolean> {
    let data = {...incomingData};
    const cqmID = cqmId;
    const riser = riserModel.toUpperCase();
    const inspectionData = new Object();
    let uniqueEndpoint: string;

    // remove images from data object and store in variable //
    let allImages: Array<string>;
    if (data['genVisImages']) {
      const genVisData: VisualGeneric = data as unknown as VisualGeneric;
      const imagesAndData = await this.compileVisGenImages(genVisData);

      allImages = imagesAndData.images;
      data = imagesAndData.data as unknown as T;
    } else {
      allImages = await this.compileImages(data);
    }

    // check if images are there to POST, and perform action //
    let imagePostResult = true;
    if (allImages.length) {
      imagePostResult = await this._imagePosting.postImages(allImages, cqmID);
      console.log('imagePostResult: ', imagePostResult);
    }

    if (!imagePostResult) {
      return false;
    }

    // remove the delete prop from data object //
    let propertyName: string;
    delete data['complete'];

    // look for indicationsData, and remove from data object //
    let indicationsPresent = false;
    if ('indicationDataList' in data) {
      indicationsPresent = true;
      delete data['indicationDataList'];
    }

    // Identify what type of inspection by looking at recordType argument, then //
    // add the correct prefix to property names. //
    for (const prop in data) {
      propertyName = this.buildPropertyName(recordName, riser, prop);
      inspectionData[propertyName] = data[prop];
    }

    // build the final data object //
    // that will be POSTed. //
    let finalData = new Object();
    if (indicationsPresent) {
      if ((recordName === 'Dye Penetrant Inspection') || (recordName === 'Eddy Current')) {
        for (const prop in inspectionData) {
          if (typeof inspectionData[prop] === 'number') {
            inspectionData[prop] = inspectionData[prop].toString();
          }
        }
      }
      finalData = {
        indicationDataList: [],
        inspectionData,
      };
    } else if (recordName === 'UT Wall Thickness') {
      const readingA = inspectionData['readingA'];
      delete inspectionData['readingA'];
      const readingB = inspectionData['readingB'];
      delete inspectionData['readingB'];
      const readingC = inspectionData['readingC'];
      delete inspectionData['readingC'];
      const readingD = inspectionData['readingD'];
      delete inspectionData['readingD'];

      for (const prop in inspectionData) {
        if (prop.includes('SURFACE_TEMPERATURE')) {
          inspectionData[prop] = inspectionData[prop].toString();
        }
      }

      finalData = {
        cqmId: cqmID,
        utInspectionData: inspectionData,
        readingA,
        readingB,
        readingC,
        readingD
      };
      uniqueEndpoint = 'https://optprg-qa-new-api.perfomatix.online/api/ut-wt-inspection';

    } else if (recordName === 'Dimensional') {
      const ranges = [...inspectionData['ranges']];
      const rangeDataVisual = {};
      const rangeData = {};
      delete inspectionData['ranges'];

      for (const item of ranges) {

        /* if (item['selectInput'] === 'visual') {
          const propName = `DIM_FORM_1_${item['count']}_VIS`;
          rangeDataVisual[propName] = item['visual'];
        } else */
        if (item['selectInput'] === 'measured') {
          if (inspectionData['DIM_FORM_1_MEASUREMENT_POINT'] === '2') {
            const degreeOne = `DIM_FORM_1_${item['count']}_0`;
            const degreeTwo = `DIM_FORM_1_${item['count']}_90`;
            rangeData[degreeOne] = item['deg0'];
            rangeData[degreeTwo] = item['deg90'];
          } else
          if (inspectionData['DIM_FORM_1_MEASUREMENT_POINT'] === '3') {
            const degreeOne = `DIM_FORM_1_${item['count']}_0`;
            const degreeThree = `DIM_FORM_1_${item['count']}_120`;
            const degreeFour = `DIM_FORM_1_${item['count']}_240`;
            rangeData[degreeOne] = item['deg0'];
            rangeData[degreeThree] = item['deg120'];
            rangeData[degreeFour] = item['deg240'];
          } else
          if (inspectionData['DIM_FORM_1_MEASUREMENT_POINT'] === '4') {
            const degreeOne = `DIM_FORM_1_${item['count']}_0`;
            const degreeTwo = `DIM_FORM_1_${item['count']}_90`;
            const degreeThree = `DIM_FORM_1_${item['count']}_120`;
            const degreeFour = `DIM_FORM_1_${item['count']}_240`;
            rangeData[degreeOne] = item['deg0'];
            rangeData[degreeTwo] = item['deg90'];
            rangeData[degreeThree] = item['deg120'];
            rangeData[degreeFour] = item['deg240'];
          }
        } else
        if (item['selectInput'] === 'gauge') {
            const degreeOne = `DIM_FORM_1_${item['count']}`;
            rangeData[degreeOne] = item['gauge'];
        }

      }
      finalData = {
        inspectionData: {
          ...inspectionData,
          ...rangeDataVisual,
          ...rangeData
        },
      };

    } else if (recordName === 'Magnetic Particle Inspection') {
      for (const prop in inspectionData) {
        if (typeof inspectionData[prop] === 'number') {
          inspectionData[prop] = inspectionData[prop].toString();
        }
      }
      finalData = {
        inspectionData,
      };

    } else {
      finalData = {
        inspectionData,
      };
    }

    // return false;
    return this._entityPostingService.postData(finalData, cqmID, uniqueEndpoint).toPromise()
      .then(async (res) => {
        if (res['data']) {
          console.log('res: ', JSON.stringify(res));
          console.log('post success (code): ', res['code']);
          console.log('post success (data): ', res['data']);

          await this._dataStorage.deleteInspection(cqmID);
          await this._dataStorage.deleteQcp(cqmID);
          await this._syncStatsService.incrementCompleted();

          return true;
        };

        return false;
      })
      .catch((err) => {
        console.log('post error: ', JSON.stringify(err));
        // this.uniqueEndpoint = undefined;
        return false;
      });
  }

  private async compileImages<T>(inspection: T): Promise<Array<string>> {
    const compiledImages: Array<string> = [];

    for (const prop in inspection) {
      const imageFound = prop.includes('images');

      if (imageFound) {
        const images = inspection[prop] as unknown as Array<string>;
        compiledImages.push(...images);
        delete inspection[prop];
      }
    }
    console.log('compiledImages: ', compiledImages);
    return compiledImages;
  }

  private async compileVisGenImages(data: VisualGeneric): Promise<{images: Array<string>; data: VisualGeneric}> {
    const compiledImages: Array<string> = [];
    const compiledComments: Array<string> = [];
    const modifiedData: VisualGeneric = data;

    for (const item of data.genVisImages) {
      compiledImages.push(item.image);
      compiledComments.push(item.note);
    }

    compiledComments.forEach((item, index) => {
      const propName = `VIS_FORM_1_COMMENT_${index + 1}`;
      modifiedData[propName] = item;
    });
    delete modifiedData.genVisImages;

    return {
      images: compiledImages,
      data: modifiedData
    };
  }

  private buildPropertyName(inspectionType: string, riser: string, property: string): string {
    switch (inspectionType) {
      case 'Pre_Inspection':
        return `PRE_${property}`;
      case 'Post_Inspection':
        return `POST_${property}`;
      case 'UT Wall Thickness':
        return property.startsWith('reading') ? property : `UT_WALL_THICK_${property}`;
      case 'Visual Inspection':
        return `${property}`;
      case 'Eddy Current':
        return `EDDY_FORM_3_${property}`;
      case 'Dye Penetrant Inspection':
        return `DPI_FORM_2_${property}`;
      case 'Magnetic Particle Inspection':
        return `MPI_FORM_1_${property}`;
      case 'Manual_Inspection':
        return `${property}`;
      case 'Dimensional':
        return property.startsWith('ranges') ? property : `DIM_FORM_1_${property}`;
    }
    //TODO: must still expand this with other inspection types.
  }

}
