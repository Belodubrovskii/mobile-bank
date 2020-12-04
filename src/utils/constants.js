import visa from '../images/visa.svg';
import mastercard from '../images/mastercard.svg';
import unionpay from '../images/unionpay.svg';

export const currencySymbols = [
  {code: 'GBP', char: '£'},
  {code: 'EUR', char: '€'},
  {code: 'RUB', char: '₽'},
];

export const paymentLogoList = [
  {name: 'visa', img: visa},
  {name: 'mastercard', img: mastercard},
  {name: 'unionpay', img: unionpay},
];

export const exchange = (initialValue, valuteFromRate, valuteToRate) => {
  return Math.round(Math.abs(initialValue)*valuteFromRate/valuteToRate*100)/100;
}
