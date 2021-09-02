export const format = (val, n = 2, decimalSeparator = ',', thousandSeparator = '.') => {
    if (!val || !Number(val)) {
        return '0,00';
    }
    const res = Number(val).toFixed(n).toString().split('.');
    const forComma = res[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
    const afterComma = res[1];
    // res = res.replace(/\./g, decimalSeparator);

    // return res.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
    return forComma + decimalSeparator + afterComma;
};
