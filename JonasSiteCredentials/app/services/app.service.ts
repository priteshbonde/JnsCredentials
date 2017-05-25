import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestMethod, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AppServiceCredentials {

    private _getCredentialsUrl = 'Home/GetCredentialsData';
    

    constructor(private http: Http) {
    }

    getfilteredDataList(RegionId: string): Observable<any> {
        let params: URLSearchParams = new URLSearchParams();


        params.set('RegionId', RegionId);
        let headers = new Headers({ 'X-Requested-With': 'XMLHttpRequest' });
        let requestOptions = new RequestOptions({ headers: headers });
        requestOptions.search = params;

        return this.http.get(this._getCredentialsUrl, requestOptions)
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}