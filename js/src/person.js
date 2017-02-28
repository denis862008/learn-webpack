var Person = function Person(name) {
    this.name = name;

    if(NODE_ENV == 'development') {
        console.log(this.name);
    }
};

Person.prototype = {
    greet: function() {
        alert('Hello ' + this.name + '!');
    }
};

module.exports = Person;
