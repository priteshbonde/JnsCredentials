import {Component,Input,Output,EventEmitter} from "@angular/core"

@Component({
    selector: "grid-ui",
    templateUrl : "Grid.html"
})
export class GridComponent {
    // binding logic
    gridData: Array<Object> = new Array<Object>();
    gridColumns: Array<Object> = new Array<Object>();

    @Input("grid-entityname")
    entityName: string = "";
    @Output("grid-selected")
    selectedEvent: EventEmitter<Object> = new EventEmitter <Object>();
    @Input("grid-data")
    set gridDataset(_gridData: Array<Object>)
    {
        if (_gridData.length > 0)
        {
            if (this.gridColumns.length == 0) {
                var ColumnNames = Object.keys(_gridData[0]);
                this.gridColumns = new Array<Object>();
                for (var columnname in ColumnNames) {
                    this.gridColumns.push(ColumnNames[columnname]);
                }
            }
            this.gridData = _gridData;

        }
    }
    Select(_selectedObj: Object) {
        this.selectedEvent.emit(_selectedObj);

    }
}