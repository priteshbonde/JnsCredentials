import { OnInit, Pipe, Component } from '@angular/core';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { AUTO_STYLE, trigger, state, style, animate, transition } from '@angular/core';

import { AppServiceCredentials } from '../../app/services/app.service';
declare var $: any;
@Component({
    selector: 'my-app',
    templateUrl: './app/components/CredentialsList.html',
    providers: [AppServiceCredentials],
})
export class AppComponent implements OnInit  {
    clubName: string = '';
    clubState: string = '';
    regionid: string = '';
    planName: string = '';
    
    filterDataList: any[];
    originalDataList: any[];
    private errorMessage: string;
    sortBy: string = "";//This param is used to determine which column to use for sorting
    direction: number = 1;//1 is ascending -1 is descending

    constructor(private _appService: AppServiceCredentials, private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
        this.clubName = "";
        this.clubState = "";
        
    }

    //Get Clubs data
    getClubsData() {
        this._appService.getfilteredDataList(this.regionid)
            .subscribe(clubs => {
                    this.originalDataList = clubs;
                    this.filterDataList = this.originalDataList;
            },
            error => {
                this.errorMessage = error;
            });
    }
    
    ngOnInit() {
        this.regionid = (<HTMLInputElement>document.getElementById('hdnRegionId')).value;
        this.getClubsData();
    }

}
