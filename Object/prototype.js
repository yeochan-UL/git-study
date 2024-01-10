const log = console.log;

const testObj = {};
log(testObj.__proto__);

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

log(IdolModel.prototype);
log(IdolModel)