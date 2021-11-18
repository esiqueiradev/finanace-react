export const currencyParser = (number: number): string => {
  const currencyFormatted =  new Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL' }).format(number)

  return currencyFormatted;
}
