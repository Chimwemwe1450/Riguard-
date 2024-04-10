import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';

import { ICapturedImage } from '../models/captured-image';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  // public photos: Image[] = [];
  public photo: ICapturedImage;
  public croppedImage: string;

  constructor() { }

  // native devices //
  public async fromGallery(): Promise<string> {
    // Take a photo
    const selectedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      quality: 60
    });

    this.photo = {
      filepath: 'soon...',
      webviewPath: selectedPhoto.webPath
    };

    // Convert and return base64 value
    const base64Image = await this.readAsBase64(selectedPhoto);

    return base64Image;
  }

  // native devices //
  public async fromCamera() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    /* this.photos.unshift({
      filepath: 'soon...',
      webviewPath: capturedPhoto.webPath
    }); */

    this.photo = {
      filepath: 'soon...',
      webviewPath: capturedPhoto.webPath
    };

    // Save the picture and add it to photo collection
    const savedImageFile = await this.savePicture(capturedPhoto);

    return savedImageFile;
  }

  // web browsers //
  public async fromBrowserGallery(): Promise<string> {
    // Take a photo
    const selectedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      quality: 70
    });

    this.photo = {
      filepath: 'soon...',
      webviewPath: selectedPhoto.webPath
    };

    // Convert and return base64 value
    const base64Image = await this.readAsBase64(selectedPhoto);

    return base64Image;
  }



  private async savePicture(photo: Photo): Promise<ICapturedImage> {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(photo);

    // Write the file to the data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath
    };
  }

  private async readAsBase64(photo: Photo): Promise<string> {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

}
