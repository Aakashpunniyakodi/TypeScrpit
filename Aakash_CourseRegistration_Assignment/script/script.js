var autoIncreamentedUserNumber = 100;
var autoIncreamentedCourseNumber = 400;
var userid;
var course = /** @class */ (function () {
    function course(name, requiredDays) {
        this.courseId = "CI" + (autoIncreamentedCourseNumber++).toString();
        this.courseName = name;
        this.requiredDays = requiredDays;
    }
    return course;
}());
var User = /** @class */ (function () {
    function User(name, age, phone) {
        this.userId = "UI" + (autoIncreamentedUserNumber++).toString();
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    return User;
}());
var UserList = new Array();
var List = new Array();
var CurrentUser = null;
var ShowRegisterDiv = document.getElementById("registerdiv");
var ShowLoginDiv = document.getElementById("logindiv");
var ShowAvailableCourseDiv = document.getElementById("availablecoursediv");
var ShowEnrolledCourseDiv = document.getElementById("enrolledcoursediv");
var ShowMainDiv = document.getElementById("maindiv");
var ShowUserMenuDiv = document.getElementById("usermenudiv");
function showRegisterDiv() {
    ShowRegisterDiv.style.display = "block";
    ShowAvailableCourseDiv.style.display = "none";
    ShowEnrolledCourseDiv.style.display = "none";
    ShowLoginDiv.style.display = "none";
    ShowMainDiv.style.display = "none";
    ShowUserMenuDiv.style.display = "none";
}
function showLoginDiv() {
    for (var index = 0; index < UserList.length; index++) {
        (document.getElementById("showuserlist").innerHTML) += "".concat(UserList[index].userId, " || ").concat(UserList[index].name, "<br>");
    }
    ShowRegisterDiv.style.display = "none";
    ShowAvailableCourseDiv.style.display = "none";
    ShowEnrolledCourseDiv.style.display = "none";
    ShowLoginDiv.style.display = "block";
    ShowMainDiv.style.display = "none";
    ShowUserMenuDiv.style.display = "none";
}
function showAvailableCouseDiv() {
    ShowRegisterDiv.style.display = "none";
    ShowAvailableCourseDiv.style.display = "block";
    ShowEnrolledCourseDiv.style.display = "none";
    ShowLoginDiv.style.display = "none";
    ShowMainDiv.style.display = "none";
    ShowUserMenuDiv.style.display = "none";
}
function showEnrolledCourseDiv() {
    ShowRegisterDiv.style.display = "none";
    ShowAvailableCourseDiv.style.display = "none";
    ShowEnrolledCourseDiv.style.display = "block";
    ShowLoginDiv.style.display = "none";
    ShowMainDiv.style.display = "none";
    ShowUserMenuDiv.style.display = "none";
}
function showMainDiv() {
    ShowRegisterDiv.style.display = "none";
    ShowAvailableCourseDiv.style.display = "none";
    ShowEnrolledCourseDiv.style.display = "none";
    ShowLoginDiv.style.display = "none";
    ShowMainDiv.style.display = "block";
    ShowUserMenuDiv.style.display = "none";
}
function showUserMenuDiv() {
    ShowRegisterDiv.style.display = "none";
    ShowAvailableCourseDiv.style.display = "none";
    ShowEnrolledCourseDiv.style.display = "none";
    ShowLoginDiv.style.display = "none";
    ShowMainDiv.style.display = "none";
    ShowUserMenuDiv.style.display = "block";
}
function register() {
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    var phone = parseInt(document.getElementById("phonenumber").value);
    var tempUser = new User(name, age, phone);
    UserList.push(tempUser);
    alert("Your registration is complete.\nYour Login ID is: ".concat(tempUser.userId));
    showMainDiv();
}
function validate() {
    var input = document.getElementById("useridcheck").value;
    for (var index = 0; index < UserList.length; index++) {
        if (input == UserList[index].userId) {
            CurrentUser = UserList[index];
        }
    }
    if (CurrentUser == null) {
        alert("Please enter the valid Login ID");
    }
    else {
        alert("login succesfull");
        document.getElementById("greet").innerHTML = "Welcome Buddy! ".concat(CurrentUser.name);
        showUserMenuDiv();
    }
}
function enroll() {
    //let courseName = (document.getElementById("course") as HTMLInputElement).value;
    //let requireddays = parseInt((document.getElementById("days") as HTMLInputElement).value);
    var enrolled = document.getElementById("course").value;
    var days = document.getElementById("days").value;
    var co = confirm("do you want to buy?");
    if (co) {
        var listobj = new course(enrolled, days);
        List.push(listobj);
        alert("course purchased success");
        console.log(listobj.courseName);
    }
    else {
        alert("ok learn somethimg made youself better with programming");
    }
    showUserMenuDiv();
}
function showhistory() {
}
