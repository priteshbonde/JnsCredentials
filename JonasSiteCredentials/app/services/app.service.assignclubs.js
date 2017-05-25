"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var AppServiceAssignClubs = (function () {
    function AppServiceAssignClubs(http) {
        this.http = http;
        this._getFilteredDataUrl = 'AssignClubs/GetFilteredClubData';
        this._getPlanDetails = 'AssignClubs/GetPlanDetails';
        this._updateFeaturedPlansUrl = 'AssignClubs/UpdateFeaturedPlans';
        this._toggleFeaturedPlansUrl = 'AssignClubs/ToggleFeaturedPlan';
    }
    AppServiceAssignClubs.prototype.getfilteredDataList = function (planId) {
        var params = new http_1.URLSearchParams();
        params.set('planId', planId);
        var headers = new http_1.Headers({ 'X-Requested-With': 'XMLHttpRequest' });
        var requestOptions = new http_1.RequestOptions({ headers: headers });
        requestOptions.search = params;
        return this.http.get(this._getFilteredDataUrl, requestOptions)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    AppServiceAssignClubs.prototype.getPlanDetails = function (clubId, planId) {
        var params = new http_1.URLSearchParams();
        params.set('clubId', clubId);
        params.set('planId', planId);
        var headers = new http_1.Headers({ 'X-Requested-With': 'XMLHttpRequest' });
        var requestOptions = new http_1.RequestOptions({ headers: headers });
        requestOptions.search = params;
        return this.http.get(this._getPlanDetails, requestOptions)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    AppServiceAssignClubs.prototype.updateFeaturedPlans = function (clubId, planIds) {
        var body = JSON.stringify({ clubId: clubId, planIds: planIds });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._updateFeaturedPlansUrl, body, options)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    AppServiceAssignClubs.prototype.toggleFeaturedPlan = function (clubId, planId, isFeatured) {
        var body = JSON.stringify({ clubId: clubId, planId: planId, isFeatured: isFeatured });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._toggleFeaturedPlansUrl, body, options)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    AppServiceAssignClubs.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    AppServiceAssignClubs.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    return AppServiceAssignClubs;
}());
AppServiceAssignClubs = __decorate([
    core_1.Injectable()
], AppServiceAssignClubs);
exports.AppServiceAssignClubs = AppServiceAssignClubs;
