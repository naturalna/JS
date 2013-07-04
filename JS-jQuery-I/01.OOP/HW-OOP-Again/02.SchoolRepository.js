    Class = (function () {
        function createClass(properties) {
            var f = function () {
                this.init.apply(this, arguments);
            }
            for (var prop in properties) {
                f.prototype[prop] = properties[prop];
            }
            if (!f.prototype.init) {
                f.prototype.init = function () { }
            }
            return f;
        }

        return {
            create: createClass,
        }
    })();

    Function.prototype.inherit = function (parent) {
        var oldPrototype = this.prototype;
        this.prototype = new parent();
        this.prototype._super = parent.prototype;
        for (var prop in oldPrototype) {
            this.prototype[prop] = oldPrototype[prop];
        }
    }

    var School = Class.create({
    init : function (name, town, classes) {
        this.name = name;
        this.town = town;
        this.classes = classes;
    },
});

var Person = Class.create({
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
});

var Teacher = Class.create({
    init : function  (firstname, lastname, age, speciality) {
        this._super.init.call(this, firstname, lastname, age);
        this.speciality = speciality;
    },
});
Teacher.inherit(Person);

var Student = Class.create({
    init : function  (firstname, lastname, age, grade) {
        this._super.init.call(this, firstname, lastname, age);
        this.grade = grade;
    },
});
Student.inherit(Person);

var repository = (function  () {
    var Classes = Class.create({
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
                    console.log("----Teacher----");
                    this[item].introduce();
                }
            }
        },
    });
    return{
        Classes : function  (name, capacity, setOfStudents, formTeacher) {
            return new Classes(name, capacity, setOfStudents, formTeacher);
        }
    }
}());

    var school = new School("SchoolName","Town",15);
    var student = new Student("Ani","Bani", 15,9);
    student.introduce();
    var teacher = new Teacher("Fname","Lname",44,"Math");
    teacher.introduce();
    cl = repository.Classes("className", 23,[student],teacher);
    console.log("Classes-----------------");
    cl.introduce();

