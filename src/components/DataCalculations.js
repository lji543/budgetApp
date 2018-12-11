class DataCalculations {
  // constructor() {
  //
  // }

  calculateTheDifference(a,b) {
    return a - b;
  }

  calculatePercent(a,b) {
    let value = ((a - b) / a)*100;
    value = Math.round(value*100)/100 * -1;

    if (value > 0) {
      value = `+${value}`;
    }

    return value;
  }

}

export default DataCalculations;
