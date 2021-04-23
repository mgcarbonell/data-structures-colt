/*
Explain what a class is
Understand how JS implements the idea of class
Define terms like abstraction, encapsulation, and polymorphism
Use ES2015 classes to implement data structures

What is a class? Blueprint for creating objs w/ predefined properties.
*/

// remember to start classes with a capital
class Student {
  // method to create new objs must be called constructor
  // whenever a new student obj is created it will get firstName and lastName
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }
  // Instance methods
  fullname() {
    // this refers to the individual instance.
    return `Your full name is ${this.firstName} ${this.lastName}`
  }

  markLate() {
    this.tardies += 1
    if (this.tardies >= 3) {
      return 'You have been kicked out!'
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`
  }
  addScore(score) {
    this.scores.push(score)
    return this.scores
  }
  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b)
    return sum / this.scores.length
  }

  // Class methods
  // allows us to define methods and functionality to classes but not so much instances of the class
  static EnrollStudents(...students) {
    // maybe send an email, or something
    // it's like a utility function not related to a single individual students,
    // but all Students. enrollStudents is part of the class.
    return 'Enrolling Students!'
  }

}

let firstStudent = new Student("Mario", "C", 1);
let secondStudent = new Student("Colt", "Steele", 1);
//                     firstName^^    lastName^^

console.log(firstStudent, secondStudent)
// we can call on the instance method with dot notation
console.log(firstStudent.fullname())
console.log(firstStudent.markLate())
console.log(firstStudent.addScore(92))
console.log(firstStudent.addScore(95))
console.log(firstStudent.addScore(76))
console.log(firstStudent.addScore(100))
console.log(firstStudent)
console.log(firstStudent.calculateAverage())
console.log(Student.EnrollStudents())

// next example

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  // Class method (see line 89)
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2))

