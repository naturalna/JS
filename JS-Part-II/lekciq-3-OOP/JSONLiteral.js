var obj = {
	name: "Ani",
	talk: function sayName() {
		//this kazwa 4e e ot tozi obekt
		console.log("Hi I am " + this.name);
	}
};
//towa nqma wyn6tno parametri koito da mu se podawat trqbwa edno po edno da se smenqt
var hm = obj;
console.log(hm.name);
// i e po referanciq posle smqnata. 
//Wseki pyt trqbwa da syzdawa6 now obekt
hm.name ="jm";
console.log(hm.name);
console.log(obj.name);