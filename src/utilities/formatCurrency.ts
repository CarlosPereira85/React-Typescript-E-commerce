const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
})



export function formatCurrency(number: number) {
    return CURRENCY_FORMAT.format(number)
}