class SmartCalculator {
  constructor(initialValue) {
    this._math = ['**', '*', '/', '-', '+'];    
    this._data = [initialValue];
  }

  add(number) {
    this._data.push('+', number);
    return this;
  }

  subtract(number) {
    this._data.push('-', number);
    return this;
  }

  multiply(number) {
    this._data.push('*', number);
    return this;
  }

  devide(number) {
    this._data.push('/', number);
    return this;
  }

  pow(number) {
    this._data.push('**', number);
    return this;
  }

  _replace(pos, newValue) {
    this._data.splice(pos - 1, 3, newValue);
  }
  
  valueOf() {  
    this._math.forEach(item => {      
      let search = item !== '**' ? [].indexOf : [].lastIndexOf;

      for (let pos; (pos = search.call(this._data, item)) > -1;) {
        switch (item) {
          case '**':
            this._replace(pos, this._data[pos - 1] ** this._data[pos + 1]);
            break;
          case '*':
            this._replace(pos, this._data[pos - 1] * this._data[pos + 1]);
            break;
          case '/':
            this._replace(pos, this._data[pos - 1] / this._data[pos + 1]);
            break;
          case '-':
            this._replace(pos, this._data[pos - 1] - this._data[pos + 1]);
            break;
          case '+':
            this._replace(pos, this._data[pos - 1] + this._data[pos + 1]);
            break;
        }
      }
    });

    return this._data[0];
  }
}

module.exports = SmartCalculator;