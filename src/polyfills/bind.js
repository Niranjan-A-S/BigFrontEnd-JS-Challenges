const person = {
    name: 'Niranjan',
    place: 'Kerala'
}

const printDetails = function (country, age) {
    console.log(`${this.name} from ${this.place}, ${country} ${age}`)
}

const newFunction = printDetails.bind(person, 'India');
newFunction(26)
//Need to  replace this with custom bind

Function.prototype.customBind = function (obj, ...args) {
    const self = this;
    return function (...args2) {
        self.apply(obj, [...args, ...args2])
    }
}
const newFunction2 = printDetails.customBind(person, 'India');
newFunction2(26)