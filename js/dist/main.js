var main =
webpackJsonp_name_([1],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var Person = __webpack_require__(0);

var person = new Person('Adam');

person.greet();

var fakeLoginBtn = document.getElementById('fake-login'),
    fakeLogoutBtn = document.getElementById('fake-logout');

fakeLoginBtn.addEventListener('click', function (e) {
    e.preventDefault();

    __webpack_require__.e/* require.ensure */(0).then((function (require) {
        var FakeLogin = __webpack_require__(1);
        var fakeLogin = new FakeLogin();
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
});

fakeLogoutBtn.addEventListener('click', function (e) {
    e.preventDefault();

    __webpack_require__.e/* require.ensure */(0).then((function (require) {
        var FakeLogout = __webpack_require__(2);
        var fakeLogout = new FakeLogout();
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
});

exports.person = Person;

/***/ })

},[4]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUGVyc29uID0gcmVxdWlyZSgnLi9wZXJzb24uanMnKTtcclxuXHJcbnZhciBwZXJzb24gPSBuZXcgUGVyc29uKCdBZGFtJyk7XHJcblxyXG5wZXJzb24uZ3JlZXQoKTtcclxuXHJcbnZhciBmYWtlTG9naW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFrZS1sb2dpbicpLFxyXG4gICAgZmFrZUxvZ291dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWtlLWxvZ291dCcpO1xyXG5cclxuZmFrZUxvZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XHJcbiAgICAgICAgdmFyIEZha2VMb2dpbiA9IHJlcXVpcmUoJy4vZmFrZUxvZ2luLmpzJyk7XHJcbiAgICAgICAgdmFyIGZha2VMb2dpbiA9IG5ldyBGYWtlTG9naW4oKTtcclxuICAgIH0sIFwiYXV0aFwiKTtcclxufSk7XHJcblxyXG5mYWtlTG9nb3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XHJcbiAgICAgICAgdmFyIEZha2VMb2dvdXQgPSByZXF1aXJlKCcuL2Zha2VMb2dvdXQuanMnKTtcclxuICAgICAgICB2YXIgZmFrZUxvZ291dCA9IG5ldyBGYWtlTG9nb3V0KCk7XHJcbiAgICB9LCBcImF1dGhcIik7XHJcbn0pO1xyXG5cclxuZXhwb3J0cy5wZXJzb24gPSBQZXJzb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL3NyYy9tYWluLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==