import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ToastService } from 'src/app/shared/services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class ImagePostingService {

  private url = `${environment.baseUrl}inspection-image/generate/`;

  constructor(
    private http: HttpClient,
    private _toastService: ToastService
  ) { }

  public async postImages(imageFields: Array<string>, cqmId: string): Promise<boolean> {
    const imageCount = imageFields.length;

    //Get the image endpoints in an array.
    const endpointsData = await this.getImageEndpoints(imageCount, cqmId).toPromise();
    const endpoints: Array<string> = endpointsData['data'];

    //Convert images to blob(binary) format//
    const blobArray: Array<Blob> = [];
    for (const base64String of imageFields) {
      const base64Data = base64String;
      const base64Response = await fetch(base64Data);
      const blob = await base64Response.blob();

      blobArray.push(blob);
    }

    return await this.postImageToEndpoint(endpoints, blobArray);
  }



  private getImageEndpoints(imageCount: number, cqmId: string): Observable<any> {
    return this.http.post<string>(
      `${this.url}url?cqmId=${cqmId}&noOfImages=${imageCount}&isIndication=false`,
      null
    );
  }

  private async postImageToEndpoint(endpoints: Array<string>, files: Array<any>): Promise<boolean> {
    let result = false;

    for (let i = 0; i < endpoints.length; i++) {
      await this.putImage(endpoints[i], files[i]).toPromise()
        .then(() => result = true)
        .catch(() => {
          this._toastService.presentToastWithButton(`Failed to submit image ${i + 1}`, 'Dismiss', 'danger');
        });
    }

    return result;

  }

  private putImage(endpoint: string, file: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'image/jpeg');

    return this.http.put(
      endpoint,
      file,
      { headers }
    );
  }

}
