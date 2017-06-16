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
var GridComponent = (function () {
    function GridComponent() {
        // binding logic
        this.gridData = new Array();
        this.gridColumns = new Array();
        this.entityName = "";
        this.selectedEvent = new core_1.EventEmitter();
    }
    Object.defineProperty(GridComponent.prototype, "gridDataset", {
        set: function (_gridData) {
            if (_gridData.length > 0) {
                if (this.gridColumns.length == 0) {
                    var ColumnNames = Object.keys(_gridData[0]);
                    this.gridColumns = new Array();
                    for (var columnname in ColumnNames) {
                        this.gridColumns.push(ColumnNames[columnname]);
                    }
                }
                this.gridData = _gridData;
            }
        },
        enumerable: true,
        configurable: true
    });
    GridComponent.prototype.Select = function (_selectedObj) {
        this.selectedEvent.emit(_selectedObj);
    };
    __decorate([
        core_1.Input("grid-entityname"), 
        __metadata('design:type', String)
    ], GridComponent.prototype, "entityName", void 0);
    __decorate([
        core_1.Output("grid-selected"), 
        __metadata('design:type', core_1.EventEmitter)
    ], GridComponent.prototype, "selectedEvent", void 0);
    __decorate([
        core_1.Input("grid-data"), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], GridComponent.prototype, "gridDataset", null);
    GridComponent = __decorate([
        core_1.Component({
            selector: "grid-ui",
            templateUrl: "Grid.html"
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
//# sourceMappingURL=GridComponent.js.map