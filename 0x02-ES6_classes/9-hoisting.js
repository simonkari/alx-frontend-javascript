/**
 * Represents a Holberton class with a specific year and location.
 */
export class HolbertonClass {
  /**
   * Creates a new instance of the HolbertonClass class with the specified year and location.
   *
   * @param {number} year - The year of the Holberton class.
   * @param {string} location - The location of the Holberton class.
   */
  constructor(year, location) {
    /**
     * The year of the Holberton class.
     * @type {number}
     * @private
     */
    this._year = year;

    /**
     * The location of the Holberton class.
     * @type {string}
     * @private
     */
    this._location = location;
  }

  /**
   * Gets the year of the Holberton class.
   * @returns {number} The year of the Holberton class.
   */
  get year() {
    return this._year;
  }

  /**
   * Gets the location of the Holberton class.
   * @returns {string} The location of the Holberton class.
   */
  get location() {
    return this._location;
  }
}

// Create instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

/**
 * Represents a student at Holberton with a first name, last name, and assigned Holberton class.
 */
export class StudentHolberton {
  /**
   * Creates a new instance of the StudentHolberton class with the specified first name, last name, and Holberton class.
   *
   * @param {string} firstName - The first name of the student.
   * @param {string} lastName - The last name of the student.
   * @param {HolbertonClass} holbertonClass - The Holberton class assigned to the student.
   */
  constructor(firstName, lastName, holbertonClass) {
    /**
     * The first name of the student.
     * @type {string}
     * @private
     */
    this._firstName = firstName;

    /**
     * The last name of the student.
     * @type {string}
     * @private
     */
    this._lastName = lastName;

    /**
     * The Holberton class assigned to the student.
     * @type {HolbertonClass}
     * @private
     */
    this._holbertonClass = holbertonClass;
  }

  /**
   * Gets the full name of the student.
   * @returns {string} The full name of the student.
   */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * Gets the Holberton class assigned to the student.
   * @returns {HolbertonClass} The Holberton class
   * assigned to the student.
   */
  get holbertonClass() {
    return this._holbertonClass;
  }

  /**
   * Gets a full description of the student including
   * the first name, last name, Holberton class year,
   * and location.
   * @returns {string} The full description of the student.
   */
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Create instances of StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

/**
 * An array containing instances of the StudentHolberton
 * class representing a list of students.
 * @type {Array<StudentHolberton>}
 */
const listOfStudents = [student1, student2, student3, student4, student5];

export default listOfStudents;
