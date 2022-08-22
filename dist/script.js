var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFullname = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
var user = new User("Vitaliy", "Petriv");
console.log(user.getFullname());
