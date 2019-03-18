import { Injectable } from '@angular/core';
import { FileInfo } from '../models';

@Injectable()
export class FileHelper {
  private fileReader: FileReader;
  constructor() {
    this.fileReader = new FileReader();
  }

  public getFileInfo(file: File) {
    const promise: Promise<any> = new Promise((resolve, reject) => {
      this.fileReader.onload = (fileData: any) => {
        resolve(fileData.target.result);
      };
    });
    this.fileReader.readAsDataURL(file);
    const fileInfo: FileInfo = new FileInfo();
    return fileInfo;
  }

  public getFileExtention(fileName: string) {
    if (fileName) {
      const index = fileName.lastIndexOf('.');
      if (index === -1) {
        return '';
      }
      return fileName.substring(index);
    }
    return '';
  }

  public getFileNameFromUrl(fileName: string) {
    if (fileName) {
      const index = fileName.lastIndexOf('/');
      if (index === -1) {
        return '';
      }
      return fileName.substring(index + 1, fileName.length);
    }
    return '';
  }
}
