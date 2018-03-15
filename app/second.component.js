"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SecondComponent = (function () {
    function SecondComponent() {
    }
    SecondComponent.prototype.ngOnInit = function () {
        // this.data = [
        //     { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, Persion: true },
        //     { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, Persion: false },
        //     { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, Persion: true },
        //     { OrderID: 10251, CustomerID: 'CHOPS', EmployeeID: 7, Persion: false }];
        this.data = [];
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderidrules = { required: true };
        this.customeridrules = { required: true };
        this.freightrules = { required: true };
        this.editparams = { params: { popupHeight: '300px' } };
        this.pageSettings = { pageCount: 5 };
    };
    return SecondComponent;
}());
SecondComponent = __decorate([
    core_1.Component({
        selector: 'app-container',
        template: "<ejs-grid [dataSource]='data' allowSorting='true' allowPaging='true' [pageSettings]='pageSettings' [editSettings]='editSettings' [toolbar]='toolbar'>\n        <e-columns>\n            <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true' [validationRules]='orderidrules'></e-column>\n            <e-column field='CustomerID' headerText='Customer ID' width='120' [validationRules]='customeridrules'></e-column>\n            <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' [validationRules]='freightrules'></e-column>\n            <e-column field='ShipName' headerText='Ship Name' width='170'></e-column>\n            <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' [edit]='editparams'></e-column>\n        </e-columns>\n    </ejs-grid>"
    })
], SecondComponent);
exports.SecondComponent = SecondComponent;
