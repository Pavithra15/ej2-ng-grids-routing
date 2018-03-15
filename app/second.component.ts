import { Component, OnInit } from '@angular/core';
import { data } from './data';

@Component({
    selector: 'app-container',
    template: `<ejs-grid [dataSource]='data' allowSorting='true' allowPaging='true' [pageSettings]='pageSettings' [editSettings]='editSettings' [toolbar]='toolbar'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true' [validationRules]='orderidrules'></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width='120' [validationRules]='customeridrules'></e-column>
            <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' [validationRules]='freightrules'></e-column>
            <e-column field='ShipName' headerText='Ship Name' width='170'></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' [edit]='editparams'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class SecondComponent implements OnInit {

    public data: Object[];
    public editSettings: Object;
    public toolbar: string[];
    public orderidrules: Object;
    public customeridrules: Object;
    public freightrules: Object;
    public editparams: Object;
    public pageSettings: Object;

    ngOnInit(): void {
        // this.data = [
        //     { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, Persion: true },
        //     { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, Persion: false },
        //     { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, Persion: true },
        //     { OrderID: 10251, CustomerID: 'CHOPS', EmployeeID: 7, Persion: false }];
         this.data = [];
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true,mode:'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderidrules = { required: true };
        this.customeridrules = { required: true };
        this.freightrules = { required: true };
        this.editparams = { params: { popupHeight: '300px' } };
        this.pageSettings = { pageCount: 5 };
    }
}