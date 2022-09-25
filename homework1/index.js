function areaOfCircle(radius) {
  area = Math.PI.toFixed(2) * radius ** 2;
  return console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);
}
arguments = process.argv.slice(2);
areaOfCircle(arguments[0] * 1);
