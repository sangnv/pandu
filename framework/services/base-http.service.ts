import { HttpClient } from '@angular/common/http';
import { environment } from '@app/env/environment';


export abstract class BaseHttpService {

  private endpointUrl: string = environment.backendApiEndpoint;
  private serviceUrl: string;  

  constructor(protected http:  HttpClient, private segmentName: string) {
    this.serviceUrl = this.endpointUrl + this.segmentName;
  }

  protected get(url) {
    return this.http.get(this.serviceUrl + url);
  }

  protected post(url, data, options?: any) {
    return this.http.post(this.serviceUrl + url, data, options);
  }

  protected put(url, data) {
    return this.http.put(this.serviceUrl + url, data);
  }

  protected patch(url, data) {
    return this.http.patch(this.serviceUrl + url, data);
  }

  protected head(url) {
    return this.http.head(this.serviceUrl + url);
  }

  protected delete(url) {
    return this.http.delete(this.serviceUrl + url);
  }
}