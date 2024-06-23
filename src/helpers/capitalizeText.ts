const capitalizeText =(text: string): string => {
  if (text.length === 0) {
      return text;
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default capitalizeText;