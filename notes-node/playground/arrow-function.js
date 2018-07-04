const sqaure = x => x * x;
console.log(sqaure(9));

var user = {
    name: 'Aviral',
    sayHi: () => {
        console.log(`hi i'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(`hi i'm ${this.name}`);
    }
}

user.sayHiAlt();