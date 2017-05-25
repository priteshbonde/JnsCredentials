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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TableSortable = (function () {
    function TableSortable() {
    }
    TableSortable.prototype.selectedClass = function (columnName) {
        return columnName == this.sort.column ? 'sort-' + this.sort.descending : '';
    };
    TableSortable.prototype.changeSorting = function (columnName) {
        var sort = this.sort;
        if (sort.column == columnName) {
            sort.descending = !sort.descending;
        }
        else {
            sort.column = columnName;
            sort.descending = false;
        }
    };
    TableSortable.prototype.convertSorting = function () {
        return this.sort.descending ? '-' + this.sort.column : this.sort.column;
    };
    return TableSortable;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TableSortable.prototype, "columns", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TableSortable.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TableSortable.prototype, "sort", void 0);
TableSortable = __decorate([
    core_1.Component({
        selector: 'table-sortable',
        templateUrl: 'src/tableSortable.html',
    })
], TableSortable);
exports.TableSortable = TableSortable;
//# sourceMappingURL=app.tableSortable.js.map