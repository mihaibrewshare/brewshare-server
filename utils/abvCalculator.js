function calculateAbv(og, fg) {
  return Math.round((og - fg) * 131.25 * 10) / 10;
}

module.exports = calculateAbv;
