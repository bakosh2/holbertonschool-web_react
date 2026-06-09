
// =======================
// Task 1 (your existing code)
// =======================

// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example Teacher
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

// Example Director
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(printTeacher("John", "Doe"));
console.log(teacher3);
console.log(director1);

// =======================
// Task 5 (NEW)
// =======================

// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class TeacherClass implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Create employee
function createEmployee(salary: number | string): Director | TeacherClass {
  if (typeof salary === "number" && salary < 500) {
    return new TeacherClass();
  }
  return new Director();
}

// =======================
// Task 4 EXTRA REQUIREMENT
// =======================

// Type guard
function isDirector(employee: Director | TeacherClass): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Execute work based on type
function executeWork(employee: Director | TeacherClass): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// =======================
// Tests
// =======================

const emp1 = createEmployee(200);
const emp2 = createEmployee(1000);

console.log(executeWork(emp1));
console.log(executeWork(emp2));
