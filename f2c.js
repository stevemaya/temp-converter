const convert = function(temp) {
    return (temp - 32) * 5 / 9;
}
const result = convert(212);


module.exports = convert;
