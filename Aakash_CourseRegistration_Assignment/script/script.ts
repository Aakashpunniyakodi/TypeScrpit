let autoIncreamentedUserNumber = 100;
let autoIncreamentedCourseNumber = 400;
let userid:string;
class course {
    courseId: string;
    courseName: string;
    requiredDays: string;
    constructor(name: string, requiredDays: string) {
        this.courseId = "CI"+(autoIncreamentedCourseNumber++).toString();
        this.courseName = name;
        this.requiredDays = requiredDays;
    }

}
class User {
    userId: string;
    name: string;
    age: number;
    phone: number;
    enrolled: course[];
    constructor(name: string, age: number, phone: number) {
        this.userId = "UI"+ (autoIncreamentedUserNumber++).toString();
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
}
let UserList: User[] = new Array();
let List: course[] = new Array();

let CurrentUser: User=null;
let ShowRegisterDiv = document.getElementById("registerdiv") as HTMLDivElement;
let ShowLoginDiv = document.getElementById("logindiv") as HTMLDivElement;
let ShowAvailableCourseDiv = document.getElementById("availablecoursediv") as HTMLDivElement;
let ShowEnrolledCourseDiv = document.getElementById("enrolledcoursediv") as HTMLDivElement;
let ShowMainDiv = document.getElementById("maindiv") as HTMLDivElement;
let ShowUserMenuDiv = document.getElementById("usermenudiv") as HTMLDivElement;
function showRegisterDiv() {
    ShowRegisterDiv.style.display = "block";
    ShowAvailableCourseDiv.style.display = "none";
    ShowEnrolledCourseDiv.style.display = "none";
    ShowLoginDiv.style.display = "none";
    ShowMainDiv.style.display = "none";
    ShowUserMenuDiv.style.display="none";
}
function showLoginDiv() {
    for (let index = 0; index <UserList.length; index++) {
        
        ((document.getElementById("showuserlist")as HTMLLabelElement).innerHTML)+=`${UserList[index].userId} || ${UserList[index].name}<br>`;
        
    }
    ShowRegisterDiv.style.display = "none";
    ShowAvailableCourseDiv.style.display = "none";
    ShowEnrolledCourseDiv.style.display = "none";
    ShowLoginDiv.style.display = "block";
    ShowMainDiv.style.display = "none";
    ShowUserMenuDiv.style.display="none";
}
function showAvailableCouseDiv() {
    ShowRegisterDiv.style.display = "none";
    ShowAvailableCourseDiv.style.display="block";
    ShowEnrolledCourseDiv.style.display = "none";
    ShowLoginDiv.style.display = "none";
    ShowMainDiv.style.display = "none";
    ShowUserMenuDiv.style.display="none";
}
function showEnrolledCourseDiv() {
    ShowRegisterDiv.style.display = "none";
    ShowAvailableCourseDiv.style.display = "none";
    ShowEnrolledCourseDiv.style.display = "block";
    ShowLoginDiv.style.display = "none";
    ShowMainDiv.style.display = "none";
    ShowUserMenuDiv.style.display="none";
}
function showMainDiv() {
    ShowRegisterDiv.style.display = "none";
    ShowAvailableCourseDiv.style.display = "none";
    ShowEnrolledCourseDiv.style.display = "none";
    ShowLoginDiv.style.display = "none";
    ShowMainDiv.style.display = "block";
    ShowUserMenuDiv.style.display="none";
}
function showUserMenuDiv() {
    ShowRegisterDiv.style.display = "none";
    ShowAvailableCourseDiv.style.display = "none";
    ShowEnrolledCourseDiv.style.display = "none";
    ShowLoginDiv.style.display = "none";
    ShowMainDiv.style.display = "none";
    ShowUserMenuDiv.style.display="block";
}
function register() {
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let age = parseInt((document.getElementById("age") as HTMLInputElement).value);
    let phone = parseInt((document.getElementById("phonenumber") as HTMLInputElement).value);
    let tempUser = new User(name, age, phone)
    UserList.push(tempUser);
    alert(`Your registration is complete.\nYour Login ID is: ${tempUser.userId}`);
    showMainDiv();
}
function validate() {
    let input = (document.getElementById("useridcheck") as HTMLInputElement).value;
    
    for (let index = 0; index < UserList.length; index++) {
        if (input == UserList[index].userId) {
            CurrentUser = UserList[index];
        }

    }
    if(CurrentUser==null){
        alert(`Please enter the valid Login ID`);
    }
    else{
        alert(`login succesfull`);
        (document.getElementById("greet")as HTMLLabelElement).innerHTML=`Welcome Buddy! ${CurrentUser.name}`;
        showUserMenuDiv();

    }

}
function enroll()
{
   
    //let courseName = (document.getElementById("course") as HTMLInputElement).value;
    //let requireddays = parseInt((document.getElementById("days") as HTMLInputElement).value);
    let enrolled=(document.getElementById(`course`) as HTMLSelectElement).value;
    let days=(document.getElementById(`days`) as HTMLSelectElement).value;
     let co=confirm("do you want to buy?");
     if(co)
     {
         let listobj=new course (enrolled,days);
         List.push(listobj);
         alert("course purchased success");
         console.log(listobj.courseName);
         
         
     }
     else{
         alert("ok learn somethimg made youself better with programming")
     }
   showUserMenuDiv();

    
   
}
function showhistory()
{
    

}