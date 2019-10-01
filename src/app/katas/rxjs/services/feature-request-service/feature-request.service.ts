import { Injectable } from "@angular/core";
import { FeatureRequest } from "src/app/model/feature-request";
import { Observable, Subject, BehaviorSubject, ReplaySubject, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FeatureRequestService {
  
  constructor() {}

  newRequest(feature: FeatureRequest) {
    
  }

  newRequests(features: FeatureRequest[]) {
    features.forEach(feature => {
      this.newRequest(feature);
    });
  }

  getSubscribableNewRequests(): Observable<FeatureRequest> {
    return of(null);
  }

  getSubscribableWithLatestItem(): Observable<FeatureRequest> {
    return of(null);
  }

  getSubscribableWithLastThree(): Observable<FeatureRequest> {
    return of(null);
  }
}
