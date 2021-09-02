const DEFAULT_VALUE = 0;
const DEFAULT_NUMBER_OF_DECIMAL_POINTS = 2;
const DEFAULT_DECIMAL_SEPARATOR = ',';
const DEFAULT_THOUSAND_SEPARATOR = '.';
const DEFAULT_ROUND_TO_NEAREST = true;

export const format = (
    val = DEFAULT_VALUE,
    n = DEFAULT_NUMBER_OF_DECIMAL_POINTS,
    decimalSeparator = DEFAULT_DECIMAL_SEPARATOR,
    thousandSeparator = DEFAULT_THOUSAND_SEPARATOR,
    roundToNearest = DEFAULT_ROUND_TO_NEAREST // false means round down
) => {
    if (!val || !Number(val)) {
        val = DEFAULT_VALUE;
    }
    // round to nearest n decimal or round down
    const roundedValue = roundToNearest ? Number(val).toFixed(n) :
        (Math.floor(Number(val) * Math.pow(10, n) ) / Math.pow(10, n)).toFixed(n);

    // split to whole number and decimal
    const numberArray = roundedValue.split('.');

    // add thousands separator
    const wholeNumberPart = numberArray[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
    const decimalPart = numberArray[1] || '';

    return wholeNumberPart + decimalSeparator + decimalPart;
};
