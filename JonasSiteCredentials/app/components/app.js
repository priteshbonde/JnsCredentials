"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_assignclubs_1 = require("../../app/services/app.service.assignclubs");
var AppComponent = (function () {
    function AppComponent(_appService) {
        this._appService = _appService;
        this.name = 'Angular';
        this.filterDataList = [];
    }
    AppComponent.prototype.getfilteredData = function () {
        var _this = this;
        this._appService.getfilteredDataList()
            .subscribe(function (clubs) { return _this.filterDataList = clubs; });
    };
    AppComponent.prototype.applyFilter = function () {
        this.getfilteredData();
        console.log(this.filterDataList);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/components/assignclubs.html',
        providers: [app_service_assignclubs_1.AppServiceAssignClubs]
    }),
    __param(0, core_1.Inject(app_service_assignclubs_1.AppServiceAssignClubs)),
    __metadata("design:paramtypes", [app_service_assignclubs_1.AppServiceAssignClubs])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map