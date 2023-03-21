//complete this code
// class Person {
// 	constructor(name,age){
// 		this.name = name;
// 		this.age = age;
// 	}
// 	set age(age){
// 		return this.age = age;
// 	}
// 	get details(){
// 		return this.name;
// 	}
// 	get age(){
// 		return this.age;
// 	}
	
// }

// class Student extends Person {
// 	study(){
// 		console.log(`${this.name} is studying`)
// 	}
// }

// class Teacher extends Person {
// 	teach(){
// 		console.log(`${this.name} is teaching`)
// 	}
// }
class Person {
	constructor(name,age){
		this._name=name;
		this._age=age;
	}

	get name(){
		return this._name;
	}

	set age(age){
		return this._age=age;
	}
	get age() {
	    return this._age;
  }
}

class Student extends Person {
	study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
	teach() {
    console.log(`${this._name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
