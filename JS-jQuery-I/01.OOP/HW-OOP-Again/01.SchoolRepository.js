if (!Object.create) {
        Object.create = function (obj) {
            function f() { };
            f.prototype = obj;
            return new f();
        }
    }

    if (!Object.prototype.extend) {
        Object.prototype.extend = function (properties) {
            function f() { };
            f.prototype = Object.create(this);//this - obj
            for (var prop in properties) {
                f.prototype[prop] = properties[prop];
            }
            f.prototype._super = this;
            return new f();
        }
    }

var School = {
	init : function (name, town, classes) {
		this.name = name;
		this.town = town;
		this.classes = classes;
	},
};

var Person = {
	init : function (firstname, lastname, age) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age;
		},
	introduce : function  () {
		for(var item in this)
		{
			if (typeof(this[item]) ==="string" || typeof(this[item]) === "number" ) {
			console.log(item + " : " + this[item]);
		}
		}
	},
};

var Teacher = Person.extend({
	init : function  (firstname, lastname, age, speciality) {
		Person.init.call(this, firstname, lastname, age);
		//this._super.init(firstname, lastname, age);
		this.speciality = speciality;
	},
});

var Student = Person.extend({
	init : function  (firstname, lastname, age, grade) {
		Person.init.call(this, firstname, lastname, age);
		//this._super.init(firstname, lastname, age);
		this.grade = grade;
	},
});
var repository = (function  () {
	var Classes = {
	init : function  (name, capacity, setOfStudents, formTeacher) {
		this.name = name;
		this.capacity = capacity;
		this.setOfStudents = setOfStudents;
		this.formTeacher = formTeacher;
		},
		introduce : function  () {
			for (var item in this){
				if (typeof(this[item]) === "string" || typeof(this[item]) ==="number") {
					console.log(item + " : " + this[item]);
				}
				
				if (this[item] instanceof Array) {
					for (var i = 0; i < this[item].length; i++) {
						console.log("-") ;
						this[item][i].introduce();
					}
				}

				if (this[item].introduce) {
					console.log("----Obj----");
					this[item].introduce();
				}
			}
		},
	};
	return{
		Classes : function  (name, capacity, setOfStudents, formTeacher) {
			var classA =  Object.create(Classes);
			classA.init(name, capacity, setOfStudents, formTeacher);
			return classA;
		}
	}
}());



//var test = repository.School().init("School", "Sofiq", 12);
//var teacher = repository.Teacher().init("Ivan","Ivanow",43, "don't know");
//console.log(teacher.introduce());
console.log("Person : --------------------------------");
var per = Object.create(Person);
per.init("a","b",5);
per.introduce();
var student = Object.create(Student);
student.init("Ivan","Asenow",55,6);
student.grade = 7;
console.log("Student : --------------------------------");
student.introduce();
var student2 = Object.create(Student);
student2.init("Asen","Ivanow",23,3);
student2.grade = 4;
console.log("Student : --------------------------------");
student2.introduce();
var teacher = Object.create(Teacher);
teacher.init("Fname","LName",42,"Specialty");

console.log("Teacher : --------------------------------");
teacher.introduce();

var setOfStudents = [];
setOfStudents.push(student);
setOfStudents.push(student2);
var formTeacher = Object.create(Teacher);
formTeacher.init("FirstName","LastName", 66,"Math");
var classA = repository.Classes("10a", 29, setOfStudents, formTeacher);

console.log("Class : --------------------------------");
classA.introduce();
var classA = repository.Classes("10b", 30, setOfStudents, formTeacher);
console.log("Class : check references----------------");
classA.introduce();