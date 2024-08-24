export const moneyFormat = amount => {
    return amount.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP'
    })
}