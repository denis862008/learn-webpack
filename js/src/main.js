var Person = require('./person.js');

var person = new Person('Adam');

person.greet();

var fakeLoginBtn = document.getElementById('fake-login'),
    fakeLogoutBtn = document.getElementById('fake-logout');

fakeLoginBtn.addEventListener('click', function(e) {
    e.preventDefault();

    require.ensure([], function(require) {
        var FakeLogin = require('./fakeLogin.js');
        var fakeLogin = new FakeLogin();
    }, "auth");
});

fakeLogoutBtn.addEventListener('click', function(e) {
    e.preventDefault();

    require.ensure([], function(require) {
        var FakeLogout = require('./fakeLogout.js');
        var fakeLogout = new FakeLogout();
    }, "auth");
});

exports.person = Person;