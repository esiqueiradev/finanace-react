export const currencyParser = (number: number): string => {
  if (number !== 0 && !number) return '';

  return new Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
}
