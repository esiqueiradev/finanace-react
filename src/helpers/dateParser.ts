export const dateParser = (dateString: string): string => {
  if(!dateString) return '';

  const date = new Date(dateString);
  
  return new Intl.DateTimeFormat('pt-BR').format(date)
}
