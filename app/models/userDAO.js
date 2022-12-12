"user strict"

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userDAO = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var bookDAO = /*#__PURE__*/function () {
  function userDAO(id, name, email, password){
    (0, _classCallCheck2["default"])(this, bookDAO);
    (0, _defineProperty2["default"])(this, "id", -1);
    (0, _defineProperty2["default"])(this, "name", "");
    (0, _defineProperty2["default"])(this, "email", "");
    (0, _defineProperty2["default"])(this, "password", "");
    this.id = id;
    this.name = name;
    this.email = email;
    this.password =password;
  }
  (0, _createClass2["default"])(userDAO, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "Name",
    get: function get() {
      return this.name;
    },
    set: function set(name) {
      this.name = name;
    }
  }, {
    key: "Email",
    get: function get() {
      return this.email;
    },
    set: function set(email) {
      this.email = email;
    }
  }, {
    key: "Password",
    get: function get() {
      return this.password;
    },
    set: function set(password) {
      this.password = password;
    }
  }
]);
  return userDAO;
}();
exports.userDAO = userDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJib29rREFPIiwiaWQiLCJhdXRob3IiLCJ0aXRsZSIsImdlbnJlIiwiY29zdCIsInN0b2NrIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL21vZGVscy9ib29rREFPLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBib29rREFPXHJcbntcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBhdXRob3I6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBnZW5yZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgY29zdDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc3RvY2s6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgYXV0aG9yOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGdlbnJlOiBzdHJpbmcsIGNvc3Q6IG51bWJlciwgc3RvY2s6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZ2VucmUgPSBnZW5yZTtcclxuICAgICAgICB0aGlzLmNvc3QgPSBjb3N0O1xyXG4gICAgICAgIHRoaXMuc3RvY2sgPSBzdG9jaztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IElkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBJZChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgQXV0aG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgQXV0aG9yKGF1dGhvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBUaXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgVGl0bGUodGl0bGU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IEdlbnJlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VucmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBHZW5yZShnZW5yZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5nZW5yZSA9IGdlbnJlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgQ29zdCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBDb3N0KGNvc3Q6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY29zdCA9IGNvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBTdG9jaygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b2NrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0IFN0b2NrKHN0b2NrOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnN0b2NrID0gc3RvY2s7XHJcbiAgICB9XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBYUEsT0FBTztFQVNoQixpQkFBWUMsRUFBVSxFQUFFQyxNQUFjLEVBQUVDLEtBQWEsRUFBRUMsS0FBYSxFQUFFQyxJQUFZLEVBQUVDLEtBQWEsRUFDakc7SUFBQTtJQUFBLDZDQVJxQixDQUFDLENBQUM7SUFBQSxpREFDRSxFQUFFO0lBQUEsZ0RBQ0gsRUFBRTtJQUFBLGdEQUNGLEVBQUU7SUFBQSwrQ0FDSCxDQUFDO0lBQUEsZ0RBQ0EsQ0FBQztJQUlyQixJQUFJLENBQUNMLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0VBQ3RCO0VBQUM7SUFBQTtJQUFBLEtBRUQsZUFBd0I7TUFDcEIsT0FBTyxJQUFJLENBQUNMLEVBQUU7SUFDbEIsQ0FBQztJQUFBLEtBRUQsYUFBY0EsRUFBVSxFQUFFO01BQ3RCLElBQUksQ0FBQ0EsRUFBRSxHQUFHQSxFQUFFO0lBQ2hCO0VBQUM7SUFBQTtJQUFBLEtBRUQsZUFBNEI7TUFDeEIsT0FBTyxJQUFJLENBQUNDLE1BQU07SUFDdEIsQ0FBQztJQUFBLEtBRUQsYUFBa0JBLE1BQWMsRUFBRTtNQUM5QixJQUFJLENBQUNBLE1BQU0sR0FBR0EsTUFBTTtJQUN4QjtFQUFDO0lBQUE7SUFBQSxLQUVELGVBQTJCO01BQ3ZCLE9BQU8sSUFBSSxDQUFDQyxLQUFLO0lBQ3JCLENBQUM7SUFBQSxLQUVELGFBQWlCQSxLQUFhLEVBQUU7TUFDNUIsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7SUFDdEI7RUFBQztJQUFBO0lBQUEsS0FFRCxlQUEyQjtNQUN2QixPQUFPLElBQUksQ0FBQ0MsS0FBSztJQUNyQixDQUFDO0lBQUEsS0FFRCxhQUFpQkEsS0FBYSxFQUFFO01BQzVCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ3RCO0VBQUM7SUFBQTtJQUFBLEtBRUQsZUFBMEI7TUFDdEIsT0FBTyxJQUFJLENBQUNDLElBQUk7SUFDcEIsQ0FBQztJQUFBLEtBRUQsYUFBZ0JBLElBQVksRUFBRTtNQUMxQixJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtJQUNwQjtFQUFDO0lBQUE7SUFBQSxLQUVELGVBQTJCO01BQ3ZCLE9BQU8sSUFBSSxDQUFDQyxLQUFLO0lBQ3JCLENBQUM7SUFBQSxLQUVELGFBQWlCQSxLQUFhLEVBQUU7TUFDNUIsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7SUFDdEI7RUFBQztFQUFBO0FBQUE7QUFBQSJ9