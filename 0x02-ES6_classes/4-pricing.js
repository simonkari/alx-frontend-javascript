// eslint-disable-next-line
import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // The numeric value representing the amount.
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  // The currency associated with the pricing.
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
