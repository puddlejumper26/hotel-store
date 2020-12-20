import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Order } from "src/app/model/order.model";
import { OrderRepository } from "src/app/services/order.repository";

@Component({
  templateUrl: 'checkout.component.html',
})
export class CheckoutComponent {
  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(public repository: OrderRepository, public order: Order) {}

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      return this.repository.saveOrder(this.order).subscribe((order) => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }

  getValidationMessages(state: any, thingName?: string) {
    let thing: string = state.path || thingName;
    let messages: string[] = [];

    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case 'required':
            messages.push(`${thing} is required`);
            break;
          case 'minlength':
            messages.push(
              `A ${thing} must be at least ${state.errors['minlength'].requiredLength}`
            );
            break;
          case 'pattern' || '':
            messages.push(`The ${thing} contains illegal char`);
            break;
        }
      }
    }
    return messages;
  }
}
