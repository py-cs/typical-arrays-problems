
exports.min = function min (array) {
  if (!array || !array.length) return 0
  return array.reduce((acc, el) => el<acc ? el : acc, Infinity)
}

exports.max = function max (array) {
  if (!array || !array.length) return 0
  return array.reduce((acc, el) => el>acc ? el : acc, -Infinity)
}

exports.avg = function avg (array) {
  if (!array || !array.length) return 0
  return array.reduce((acc, el) => acc + el, 0) / array.length
}
