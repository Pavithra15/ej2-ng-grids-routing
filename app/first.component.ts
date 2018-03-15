import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { data } from './data';
import {
    Router,
    Event,
    NavigationStart, RoutesRecognized, RouteConfigLoadStart,
    RouteConfigLoadEnd, NavigationEnd, NavigationCancel, NavigationError
} from '@angular/router';

import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GridComponent } from '@syncfusion/ej2-ng-grids';


@Component({
    selector: 'app-container',
    template: `<ejs-grid #grid [dataSource]='data' height='200px' [enablePersistence]='true' [allowReordering]='true' [allowResizing]='true' [allowSorting]='true' [allowFiltering]='true'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class FirstComponent implements OnInit {

    public data: Object[];
    public groupOptions: Object[];

    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }
}