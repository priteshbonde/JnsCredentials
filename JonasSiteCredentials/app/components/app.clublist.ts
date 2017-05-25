import { Inject, Component,Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppServiceAssignClubs } from '../../app/services/app.service.assignclubs';
import { ClubInfo } from '../../app/entities/ClubInfo'
import { Http, Response, Headers } from '@angular/http';
import { AppComponent } from '../../app/components/app.assignclubs';

@Component({
    selector: 'child-selector',
    template: 'child.component.html'
})

export class ClubListComponent {
    @Input() title: string;
}
