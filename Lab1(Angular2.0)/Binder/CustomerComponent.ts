import {Component} from "@angular/core"
import {Customer} from "../Model/Customer"

@Component({
    selector: "customer-ui",
    templateUrl : "Customer.html"
})
export class CustomerComponent {
    // binding logic
    Currentcustomerobj: Customer = new Customer();

    customers: Array<Customer> = new Array<Customer>();

    Add()
    {
        this.customers.push(this.Currentcustomerobj);
        this.customers = this.customers.slice();
        this.Currentcustomerobj = new Customer;
    }

    Select(selectedCust: Customer)
    {
        this.Currentcustomerobj = Object.assign({},selectedCust);
    }
    Update()
    {
        for (let customer of this.customers)
        {
            if (this.Currentcustomerobj.CustomerCode == customer.CustomerCode)
            {
                customer.CustomerAmount = this.Currentcustomerobj.CustomerAmount;
                customer.CustomerName=this.Currentcustomerobj.CustomerName;
            }
        }
        this.Currentcustomerobj = new Customer;
    }
    clear() {
        this.Currentcustomerobj = new Customer();
    }
}