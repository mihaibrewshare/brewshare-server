function calculatSrm(ebc) {
  return Math.round((ebc / 1.97) * 10) / 10;
}

module.exports = calculatSrm;
