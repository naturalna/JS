//modelite sa funkcii koito wry6tat funkcii
// i 4rez tqh mojem da syzdawame obekti bez da polzwame new -- po byrzo e 



/// MODELITE SE POLZWAT ZA NAMESPACE NAI_CHESTO
function factory (name) {
	return {
		name:name
	};
}

// primer 
 PersonMY = function (param) {
 	 var name = param.name;// private
 	 this.age = param.age;
 	 return {
 	 	//getter i setter
 	 	setName : function (n) {
 	 		name = n;
 	 	},
 	 	getName : function () {
 	 		return name;
 	 	},
 	 	// this tuk e zadyljitelen i towa si e publi4no pole ot samoto na4alo
 	 	age :this.age
 	 };
 }
 var ani = new PersonMY({name:"Ani",age:23});
 // pri pyrwo inicializirane imeto e Ani i we4e ne moje da se smenq za6toto nqma set
 //ako iskame da go promenim to towa stawa samo prez set funkciqta
 console.log(ani.getName());
 ani.setName("Momuna");
 console.log(ani.getName());
 // age a public
 console.log(ani.age);


//nasledqwane + clasi4esko OOP
function Person(fname, lname) {// wse edno imame var fname = fname.Toest private sa
    var getFullname = function(){//private
             return fname + " " + lname;
    }

  this.introduce = function(){//private
    return "Hello! My name is " + getFullname();
  }
}

function Student(fname, lname, grade) {
    Person.apply(this, arguments);
    //Person.call(this, fname, lname);

  this.getGrade = function(){
    return grade;
  }

  this.getFullname = function () {
      return "";
  }
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

var cecoTroikata = new Student("Ceco", "Troikata", 3);

console.log("cecoTroikata instanceof Student? " + (cecoTroikata instanceof Student));
console.log("cecoTroikata instanceof Person? " + (cecoTroikata instanceof Person));
console.log("cecoTroikata is in " + cecoTroikata.getGrade() + " grade");
console.log(cecoTroikata.introduce());

// towa syzdawa wseki pyt wsi4ki wytre6ni funkcii--getGrade, getFullName
//ako gi napi6em publi4ni t.e.
/// da sa publi4niiii

function PersonPublic(fname, lname) {
	this.fname = fname;
	this.lname = lname;
	var pr = 10;
    var getFullname = function(){
             return fname + " " + lname;
    }
}

PersonPublic.prototype.introduce = function () {
	return "My name is : " + this.fname + " "+ this.lname;//tuk si 4ete this-owete bez problem
}

console.log("here");
var p = new PersonPublic("ani","bani");
console.log(p.fname);
console.log(p.introduce());
console.log(p.pr);// towa si e private
console.log(p.getFullname);// i towa si e private

var me = new PersonPublic("boqn", "Momunata");
console.log(me.introduce()); //