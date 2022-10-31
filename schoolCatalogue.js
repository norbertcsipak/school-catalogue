class School {
  constructor (name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name () {
    return this._name;
  }

  get level () {
    return this._level;
  }

  get numberOfStudents () {
    return this._numberOfStudents;
  }

  set numberOfStudents (newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      return `Invalid input: ${this.numberOfStudents} must be set to a Number.`
    }
  }

  quickFacts () {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
  }

  static pickSubstituteTeacher (substituteTeachers) {
    const randInteger = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randInteger];
  }
}

class PrimarySchool extends School {
  constructor (name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy () {
    return this._pickupPolicy;
  }
}

const primarySchool1 = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
primarySchool1.quickFacts();

class HighSchool extends School {
  constructor (name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams () {
    return this._sportsTeams;
  }
}

const highSchool1 = new HighSchool('Al E. Smith', 415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(highSchool1.sportsTeams);

// list of all substitute teachers
const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
