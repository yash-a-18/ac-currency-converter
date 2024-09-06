import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_bupM4s1YsBZzOicSK9YNgp50EaSt60gQ8xxoziAo');

convertCurrency('CAD', 'INR', 100);

export async function convertCurrency(fromCurrency, toCurrency, amount) {
    const result = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = result.data[toCurrency];
    return multiplier * amount;
}