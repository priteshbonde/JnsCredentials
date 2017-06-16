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
var core_1 = require("@angular/core");
var Customer_1 = require("../Model/Customer");
var CustomerComponent = (function () {
    function CustomerComponent() {
        // binding logic
        this.Currentcustomerobj = new Customer_1.Customer();
        this.customers = new Array();
    }
    CustomerComponent.prototype.Add = function () {
        this.customers.push(this.Currentcustomerobj);
        this.customers = this.customers.slice();
        this.Currentcustomerobj = new Customer_1.Customer;
    };
    CustomerComponent.prototype.Select = function (selectedCust) {
        this.Currentcustomerobj = Object.assign({}, selectedCust);
    };
    CustomerComponent.prototype.Update = function () {
        for (var _i = 0, _a = this.customers; _i < _a.length; _i++) {
            var customer = _a[_i];
            if (this.Currentcustomerobj.CustomerCode == customer.CustomerCode) {
                customer.CustomerAmount = this.Currentcustomerobj.CustomerAmount;
                customer.CustomerName = this.Currentcustomerobj.CustomerName;
            }
        }
        this.Currentcustomerobj = new Customer_1.Customer;
    };
    CustomerComponent.prototype.clear = function () {
        this.Currentcustomerobj = new Customer_1.Customer();
    };
    CustomerComponent = __decorate([
        core_1.Component({
            selector: "customer-ui",
            templateUrl: "Customer.html"
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=CustomerComponent.js.map