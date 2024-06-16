const formatPrice = (number: number): string => {
  const price = number.toFixed(2);

  const [whole, decimal] = price.split(".");

  // insert a comma for thousands separator
  const formattedWhole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return `${formattedWhole}.${decimal}`;
}

export default formatPrice;