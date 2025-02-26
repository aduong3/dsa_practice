class Student {
  constructor(firstName, lastName, age, occupation = "none") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.occupation = occupation;
    this.tardies = 0;
  }
  fullName() {
    return `Your name is ${this.firstName} ${this.lastName}`;
  }
  markTardy() {
    this.tardies += 1;
    if (this.tardies >= 3) return `You are expelled!`;
    return `${this.firstName} ${this.lastName} is late! This is tardy number ${this.tardies}!`;
  }
  static enrollStudents(...students) {
    return "Enrolling students";
  }
}

let andrew = new Student("Andrew", "Duong", "26");
console.log(andrew);
