interface DirectorInterface {
  workFromHome(): string {
    return "sring";
  }
  getCoffeeBreak(): string {
    return "string";
  }
  workDirectorTasks(): string {
    return "string";
  }
}

interface TeacherInterface {
  workFromHome(): string {
    return "string";
  }
  getCoffeeBreak(): string {
    return "string";
  }
  workTeacherTasks(): string {
    return "string";
  }
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "working from home";
  }
  getToWork(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCofeeBreak(): string {
    return "cannot have a break";
  }
  workTeacherTask(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number): Director | Teacher {
  if (salary >= 500) {
    return new Director():
  } else {
    return new Teacher();
  }
}

function isDirector(employee: any): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee) {
  if employee is Director {
    workDirectorTasks();
  } else if is Teacher {
    workTeacherTasks();
  }
}

type Subjects = 'Maths' | 'History';
function teachClass(todayClass) {
  if todayClass === 'Maths' {
    return 'TeachingMath';
  } else if todayClass === 'History' {
    return 'TeachingHistory';
  }
}
