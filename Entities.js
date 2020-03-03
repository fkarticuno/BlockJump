

// requiring our Student module exported from student.js
var Student = require("./student.js");

// constructor function for creating classroom objects
var Classroom = function(profName, roomNum) {
  // this.students will hold all of our student objects
  this.students = [];
  this.profName = profName;
  this.roomNum = roomNum;
  // a method that creates a student using our Student constructor.
  // It then pushes the new student object to this.students and updates this.numStudents
  this.addStudent = function(name, favoriteSub, gpa) {
    this.students.push(new Student(name, favoriteSub, gpa));
  };
  // this method will tell you how many students are in the class
  this.studentCount = function() {
    return this.students.length;
  };
};

// exporting our Classroom constructor. We will require it in main.js
module.exports = Classroom;

// =====================================================================

// constructor function for creating student objects
var Student = function(name, favoriteSub, gpa) {
    this.name = name;
    this.favoriteSub = favoriteSub;
    this.gpa = gpa;
  };
  
  // exporting our Student constructor
  module.exports = Student;

  // =====================================================================

  // requiring our Classroom module exported from classroom.js
var Classroom = require("./Classroom.js");

// creating and storing a new classroom object
var firstClass = new Classroom("Ahmed", 3187);

// calling the addStudent method on our firstClass object
firstClass.addStudent("Jacob", "Coding", 3.87);

console.log(firstClass);