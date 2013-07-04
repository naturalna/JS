var school = (function () {
	var students =[];
	function addStudent (name, grade) {
		students.push({name1:name, garde1:grade});
		console.log(students[0].name1);
		console.log(students[0].garde1);
	}
	return {
		add:addStudent
	}
	//ekwilalentno na return addStudent ot predniqt primer w demoto
	// samo 4e sa mn funkciite i wry6tame obekt ot funkcii wse edno wikame parametyr na
	// obekt ,a parametyryt ne e 4islo ili string a funkciq add("ina",15) wika funkciqta
	// addStudent("ina",15), a student[] e ob6t i se pazi postoqnno  bi trqbwalo da moje
	// da se zadawat i parametri nachalni koito da sa ob6ti .Kato w predniqt primer
}());
 var a =school.add("ina",15);
 console.log(a);

// sys parametri ob6ti zadadeni otwyn------NE Stawa
var school1 = (function (students1) {
	var students2 =students1;
	function addStudent (name, grade) {
		students2.push({name1:name, garde1:grade});
		console.log(students2[0].name1);
		console.log(students2[0].garde1);
	}
	return {
		add:addStudent
	}
	//ekwilalentno na return addStudent ot predniqt primer w demoto
	// samo 4e sa mn funkciite i wry6tame obekt ot funkcii wse edno wikame parametyr na
	// obekt ,a parametyryt ne e 4islo ili string a funkciq add("ina",15) wika funkciqta
	// addStudent("ina",15), a student[] e ob6t i se pazi postoqnno  bi trqbwalo da moje
	// da se zadawat i parametri nachalni koito da sa ob6ti .Kato w predniqt primer
}());
 //var studentArr = [{name:"muna", grade:658}];
 //school1.add("ani",112);
