// All Rights Reserved. © disgin.website

const CURRENCY = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const currency = (number) => {
  return CURRENCY.format(number);
};

export default currency;
