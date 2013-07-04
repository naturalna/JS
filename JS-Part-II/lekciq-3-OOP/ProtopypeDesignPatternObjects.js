// syzdawame si obekt 
//konstructor
// w param sa mi wsi4ki stoinosti koito 6te podawam na konstr
//sega e publi4ean ako napi6a (var Konstr) stawa private

//TOWA E PO SKORO CLASI`ESKOTO OOP NE E PROTOTIPNOTO
 Konstr = function (param) {
 	this.name = param.name;
 	this.age = param.age;
 	var k = 5;
 }
//k = 5 e private i ne moje da se wika
// zaka4ane na funkcii
// za daa spestim postoqnnoto pisane na protopiti pi6em 
// towa e prezapiswane na celiqt protopit zatowa gornata funkciq we4e ne sy6testwuwa
Konstr.prototype = {
	sayAge : function () {
			console.log(this.age);
			},
	sayHello : function () {
			console.log("My name is :" + this.name);
			},
	init: function () {	
		console.log(this.name + "  inside");
		// ako imame anonimna funkciq w teku6tata funkciq this se obry6ta kym
		// this na anonimnata funkciq a ne kym obekta ni
		// prawim self
		var self = this;
		var a = function () {
			console.log(this.name + " trqbwa da q nqma s this");
		}
		var b =  function () {
			console.log(self.name + " trqbwa da q ima s self");
		}
		a();
		b();
		// ako funkciqta ne e anonimna
		// pak ne se izpylnqwa
		function cc() {
			console.log(this.name + " trqbwa da q nqma s this");
		}
		cc();
	}
}



 // syzdawane na instanciq 
 //JSON --{name:"Gosho", age:55}
 var gosho = new Konstr({name:"Gosho", age:55});
gosho.sayHello();
gosho.sayAge();
console.log(gosho.k);

gosho.init();
