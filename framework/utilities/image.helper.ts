import { Injectable } from '@angular/core';

@Injectable()
export class ImageHelper {
  private canvasId: number = 0;

  constructor() {    
  }

  public async getImageInfo(url: string): Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        resolve(image);
      };
      image.onerror = () => {
        reject(url);
      }
      image.src = url;
    });
    return promise;
  }

  public async grayscale(url: string): Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      this.getImageInfo(url).then((image: any) => {
        this.canvasId++;
        let imageConvertDiv: any = document.getElementById('image-convert');
        let canvas: any = document.createElement('canvas');
        canvas.id = 'image-convert-canvas-' + this.canvasId;     
        canvas.width = image.width;
        canvas.height = image.height;
        imageConvertDiv.appendChild(canvas);

        let context: any = canvas.getContext('2d');
        context.drawImage(image, 0, 0);

        //get the image data;
        var imageData = context.getImageData(0, 0, image.width, image.height);
        //Get the CanvasPixelArray
        var data = imageData.data;

        //Get length of all pixels in image each pixel made up of 4 elements for each pixel, one for Red, Green, Blue and Alpha
        var arraylength = image.width * image.height * 4;
        //Go through each pixel from bottom right to top left and alter to its gray equiv

        //Common formula for converting to grayscale.
        //gray = 0.3*R + 0.59*G + 0.11*B
        for (var i = arraylength - 1; i > 0; i -= 4) {
          //R= i-3, G = i-2 and B = i-1
          //Get our gray shade using the formula
          var gray = 0.3 * data[i - 3] + 0.59 * data[i - 2] + 0.11 * data[i - 1];
          //Set our 3 RGB channels to the computed gray.
          data[i - 3] = gray;
          data[i - 2] = gray;
          data[i - 1] = gray;
        }

        context.clearRect(0, 0, image.width, image.height);
        context.putImageData(imageData, 0, 0);
        const dataUrl = canvas.toDataURL();
        imageConvertDiv.removeChild(canvas);
        resolve(dataUrl);
      });
    });    
    return promise;
  }
}