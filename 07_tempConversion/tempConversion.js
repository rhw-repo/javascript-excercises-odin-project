const ftoc = (number) => {
  result = (number - 32) * 0.55555555555556;
  console.log(result);
  celcius = Math.round(result * 10) /10;
  console.log(celcius);
  return celcius;
}

const ctof = (number) => {
  result = (number * 9 / 5) + 32;
  console.log(result);
  farenheight = Math.round(result * 10) /10;
  console.log(farenheight);
  return farenheight;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
