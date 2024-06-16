const roundNumber = (number: number): number => {
  const roundNumber = Math.round(number * 100) / 100;
  // console.log("roundNumber:", roundNumber)

  const twoDecimalNumbers = roundNumber.toFixed(2);
  // console.log("twoDecimalNumbers:", twoDecimalNumbers)

  const stringToNumber = parseFloat(twoDecimalNumbers);
  // console.log("stringToNumber:", stringToNumber)
  
  return stringToNumber;
}

export default roundNumber;