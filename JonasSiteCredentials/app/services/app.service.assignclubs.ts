import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestMethod, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppServiceAssignClubs {

    private _getFilteredDataUrl = 'AssignClubs/GetFilteredClubData';
    private _getPlanDetails = 'AssignClubs/GetPlanDetails';
    private _updateFeaturedPlansUrl = 'AssignClubs/UpdateFeaturedPlans';
    private _toggleFeaturedPlansUrl = 'AssignClubs/ToggleFeaturedPlan';

    constructor(private http: Http) {
    }

    getfilteredDataList(planId: string): Observable<any> {
        let params: URLSearchParams = new URLSearchParams();
        

        params.set('planId', planId);
        let headers = new Headers({ 'X-Requested-With': 'XMLHttpRequest' });
        let requestOptions = new RequestOptions({ headers : headers });
        requestOptions.search = params;

        return this.http.get(this._getFilteredDataUrl, requestOptions)
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getPlanDetails(clubId: string, planId: string): Observable<any> {
        let params: URLSearchParams = new URLSearchParams();

        params.set('clubId', clubId);
        params.set('planId', planId);
        let headers = new Headers({ 'X-Requested-With': 'XMLHttpRequest' });
        let requestOptions = new RequestOptions({ headers: headers });
        requestOptions.search = params;

        return this.http.get(this._getPlanDetails, requestOptions)
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    updateFeaturedPlans(clubId: Number, planIds: Number[]): Observable<any> {

        let body = JSON.stringify({ clubId: clubId, planIds: planIds });
        let headers = new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(this._updateFeaturedPlansUrl, body, options)
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    toggleFeaturedPlan(clubId: string, planId: string, isFeatured: boolean): Observable<any> {

        let body = JSON.stringify({ clubId: clubId, planId: planId, isFeatured: isFeatured });
        let headers = new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._toggleFeaturedPlansUrl, body, options)
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];

    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


}