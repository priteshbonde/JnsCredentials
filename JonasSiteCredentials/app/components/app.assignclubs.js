"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var app_service_assignclubs_1 = require("../../app/services/app.service.assignclubs");
var AppComponent = (function () {
    function AppComponent(_appService, toastyService, toastyConfig) {
        this._appService = _appService;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.clubName = '';
        this.clubState = '';
        this.planId = '';
        this.planName = '';
        this.sortBy = ""; //This param is used to determine which column to use for sorting
        this.direction = 1; //1 is ascending -1 is descending
        this.clubName = "";
        this.clubState = "";
    }
    //Get Clubs data
    AppComponent.prototype.getClubsData = function () {
        var _this = this;
        this.updateStatus = false;
        this._appService.getfilteredDataList(this.planId)
            .subscribe(function (clubs) {
            if (clubs.message == '_Logon_') {
                _this.redirectToLogin();
            }
            else {
                _this.updateStatus = true;
                _this.originalDataList = clubs;
                _this.filterDataList = _this.originalDataList;
            }
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    //Get Plans for selected club
    AppComponent.prototype.getPlansData = function (club) {
        var _this = this;
        this.updateStatus = false;
        this._appService.getPlanDetails(club.Id, this.planId)
            .subscribe(function (plans) {
            if (plans.message == '_Logon_') {
                _this.redirectToLogin();
            }
            else {
                _this.updateStatus = true;
                club.plans = plans;
                club.ShowHideReconcile = !club.ShowHideReconcile;
                club.CurrentFeatures = club.plans.filter(function (item) { return item.IsFeatured === true; }).length;
            }
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    //Get filtered data by passing parameters
    AppComponent.prototype.getfilteredData = function () {
        var _this = this;
        this.filterDataList = this.originalDataList.filter(function (club) { return club.Name.toLowerCase().indexOf(_this.clubName.toLowerCase()) !== -1 && club.State.toLowerCase().indexOf(_this.clubState.toLowerCase()) !== -1; });
    };
    AppComponent.prototype.applyFilter = function () {
        this.getfilteredData();
    };
    AppComponent.prototype.onReconcile = function (club) {
        this.getPlansData(club);
    };
    //Update featured plan
    AppComponent.prototype.updateFeaturedPlans = function (event, club, plan) {
        var _this = this;
        this.updateStatus = false;
        var planIds = [];
        var item;
        var blnResult = false;
        plan.IsFeatured = event.currentValue;
        //Pushing all selected items into the array
        for (var _i = 0, _a = club.plans; _i < _a.length; _i++) {
            item = _a[_i];
            if (item.IsFeatured)
                planIds.push(item.Id);
        }
        this._appService.updateFeaturedPlans(club.Id, planIds)
            .finally(function () {
            if (_this.updateStatus) {
                club.CurrentFeatures = club.plans.filter(function (item) { return item.IsFeatured === true; }).length;
                _this.showToast(plan.Name + " plan updated successfully.", ToastyType.SUCCESS);
                if (!event.currentValue) {
                    club.ShowPlanIsAlreadyFeatured = false;
                }
            }
            else {
                plan.IsFeatured = event.previousValue;
            }
        })
            .subscribe(function (result) {
            if (result.message == '_Logon_') {
                _this.redirectToLogin();
            }
            else {
                _this.updateStatus = result;
                if (plan.Id == _this.planId)
                    club.IsFeatured = event.currentValue;
            }
        }, function (error) {
            _this.errorMessage = error;
            _this.showToast("Something went wrong!", ToastyType.ERROR);
        });
    };
    //Toggle featured plan
    AppComponent.prototype.toggleFeaturedPlans = function (event, club) {
        var _this = this;
        this.updateStatus = false;
        var planIds = [];
        var item;
        var blnResult = false;
        club.IsFeatured = event.currentValue;
        this._appService.toggleFeaturedPlan(club.Id, this.planId, event.currentValue)
            .finally(function () {
            if (_this.updateStatus) {
                club.CurrentFeatures = event.currentValue == true ? club.CurrentFeatures + 1 : club.CurrentFeatures - 1;
                _this.showToast(_this.planName + " plan updated successfully.", ToastyType.SUCCESS);
                if (!event.currentValue) {
                    club.ShowPlanIsAlreadyFeatured = false;
                }
            }
            else {
                club.IsFeatured = event.previousValue;
            }
        })
            .subscribe(function (result) {
            if (result.message == '_Logon_') {
                _this.redirectToLogin();
            }
            else {
                _this.updateStatus = result;
                if (club.plans && club.plans.length > 0) {
                    var plans = club.plans.filter(function (item) { return item.Id == _this.planId; });
                    if (plans && plans.length > 0) {
                        plans[0].IsFeatured = event.currentValue;
                    }
                }
            }
        }, function (error) {
            _this.errorMessage = error;
            _this.showToast("Something went wrong!", ToastyType.ERROR);
        });
    };
    AppComponent.prototype.showToast = function (msg, toastyType) {
        // Just add default Toast with title only
        var toastOptions = {
            title: "Error",
            msg: msg,
            showClose: true,
            timeout: 5000,
            theme: 'bootstrap',
            onAdd: function (toast) {
            },
            onRemove: function (toast) {
            }
        };
        switch (toastyType) {
            case ToastyType.SUCCESS:
                toastOptions.title = "Success";
                this.toastyService.success(toastOptions);
                break;
            case ToastyType.WARNING:
                toastOptions.title = "Alert";
                this.toastyService.warning(toastOptions);
                break;
            case ToastyType.ERROR:
                toastOptions.title = "Error";
                this.toastyService.error(toastOptions);
                break;
        }
    };
    AppComponent.prototype.redirectToLogin = function () {
        window.location.href = "Account/Login";
    };
    AppComponent.prototype.showValidationMessage = function (club, plan) {
        if (this.updateStatus && !plan.IsFeatured && club.CurrentFeatures == 4)
            this.showToast("Only 4 Plan Can be selected!", ToastyType.WARNING);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.planId = document.getElementById('hdnPlanId').value;
        this.planName = document.getElementById('hdnPlanName').value;
        this.getClubsData();
    };
    AppComponent.prototype.sortGrid = function (key) {
        var _this = this;
        if (this.sortBy === key) {
            this.direction = this.direction * -1;
        }
        else {
            this.direction = 1;
        }
        this.sortBy = key;
        if (this.filterDataList != null) {
            this.filterDataList.sort(function (a, b) {
                if (a[key] === b[key]) {
                    return 0;
                }
                else if (a[key] > b[key]) {
                    return 1 * _this.direction;
                }
                else {
                    return -1 * _this.direction;
                }
            });
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/components/CredentialsList.html',
        providers: [app_service_assignclubs_1.AppServiceAssignClubs],
        animations: [
            core_2.trigger('toggleState', [
                core_2.state('true', core_2.style({ height: core_2.AUTO_STYLE, opacity: 1 })),
                core_2.state('false', core_2.style({ height: 0, opacity: 0 })),
                // transition
                core_2.transition('0 => 1', core_2.animate('300ms')),
                core_2.transition('1 => 0', core_2.animate('100ms')),
            ])
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
var ToastyType;
(function (ToastyType) {
    ToastyType[ToastyType["SUCCESS"] = 0] = "SUCCESS";
    ToastyType[ToastyType["WARNING"] = 1] = "WARNING";
    ToastyType[ToastyType["ERROR"] = 2] = "ERROR";
})(ToastyType = exports.ToastyType || (exports.ToastyType = {}));
