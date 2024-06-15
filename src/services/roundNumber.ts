const roundNumber = (number: number): number => {
  const floorNumber = Math.floor(number * 100) / 100;
  // console.log("floorNumber:", floorNumber)

  const twoDecimalNumbers = floorNumber.toFixed(2);
  // console.log("twoDecimalNumbers:", twoDecimalNumbers)

  const stringToNumber = parseFloat(twoDecimalNumbers);
  // console.log("stringToNumber:", stringToNumber)
  
  return stringToNumber;
}

export default roundNumber;