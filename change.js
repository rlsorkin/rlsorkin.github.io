var i = 0;
var results = [];
var answerSrc = "assets/Talent_icon.png";

var spellDetails = [
	{
		name: "Cold Snap",
		combo: "quas,quas,quas",
		description: "This is a description of cold snap!",
		icon: "assets/Cold_Snap_icon.png"
	},
	{
		name: "Ghost Walk",
		combo: "quas,quas,wex",
		description: "Ghost Walk is cool, helps you escape.",
		icon: "assets/Ghost_Walk_icon.png",
	},
	{
		name: "Ice Wall",
		combo: "exort,quas,quas",
		description: "Ice Wall makes an ice wall.",
		icon: "assets/Ice_Wall_icon.png",
	},
	{
		name: "EMP",
		combo: "wex,wex,wex",
		description: "EMP takes too long!",
		icon: "assets/EMP_icon.png",
	},
	{
		name: "Tornado",
		combo: "quas,wex,wex",
		description: "Tornado is pretty self explanatory, tbh.",
		icon: "assets/Tornado_icon.png",
	},
	{
		name: "Alacrity",
		combo: "exort,wex,wex",
		description: "Alacrity makes the shakes go away.",
		icon: "assets/Alacrity_icon.png",
	},
	{
		name: "Deafening Blast",
		combo: "exort,quas,wex",
		description: "This is the good one! This one!",
		icon: "assets/Deafening_Blast_icon.png",
	},
	{
		name: "Sun Strike",
		combo: "exort,exort,exort",
		description: "Boom, headshot.",
		icon: "assets/Sun_Strike_icon.png",
	},
	{
		name: "Forge Spirits",
		combo: "exort,exort,quas",
		description: "Friends are better than gold, but both is better than either.",
		icon: "assets/Forge_Spirits_icon.png",
	},
	{
		name: "Chaos Meteor",
		combo: "exort,exort,wex",
		description: "You'd think it would do more damage.",
		icon: "assets/Chaos_Meteor_icon.png",
	}
];

var spellArray = [
	[
		"quas",
		"quas",
		"quas"
	],

	[
		"exort",
		"quas",
		"quas"
	],

	[
		"quas",
		"quas",
		"wex"
	],

	[
		"exort",
		"exort",
		"quas"
	],

	[
		"exort",
		"exort",
		"exort"
	],

	[
		"exort",
		"quas",
		"wex"
		
	],

	[
		
		"exort",
		"exort",
		"wex"
	],

	[
		"quas",
		"wex",
		"wex"
	],

	[
		"exort",
		"wex",
		"wex"
		
	],

	[
		"wex",
		"wex",
		"wex"
	]
];


let sendOrb = function(currOrb){
	var iconArray = {
			exort: "assets/Exort_icon.png",
			quas: "assets/Quas_icon.png",
			wex: "assets/Wex_icon.png"
		};

		var divSelectorArray = [
			"answer1",
			"answer2",
			"answer3"
		];

		var tempSelectorArray = [
			"tempImg1",
			"tempImg2",
			"tempImg3"
		];

		if(i<3){
			results.push(currOrb);
			var elem = document.createElement("img");
			elem.setAttribute("src", iconArray[currOrb]);
			var oldImg = document.getElementById(tempSelectorArray[i]);
			document.getElementById(divSelectorArray[i]).replaceChild(elem, oldImg);
			i++;
		}
};

let evalOrbs = function(){
	var answer = document.createElement("img");
	var answerDiv = document.getElementById("answerDiv");
	var tempElem = document.getElementById("tempAnswer");

	for(let i = 0; i<spellArray.length; i++){
		let currCombo = spellArray[i].sort().join(',');
		let resultCombo = results.sort().join(',');
		if(resultCombo === currCombo){
			answer.src = findIcon(currCombo);
			answerDiv.replaceChild(answer, tempElem);
			document.getElementById("spellDescription").innerHTML = "<p>" + findDescription(spellArray[i]) + "</p>";
		}
	};
};

let findDescription = function(orbString){
	for(let i = 0; i < spellDetails.length; i++){
		if(orbString == spellDetails[i].combo){
			return spellDetails[i].description;
		}
	}
};

let findIcon = function(orbString){
	for(let i = 0; i < spellDetails.length; i++){
		if(orbString == spellDetails[i].combo){
			return spellDetails[i].icon;
		}
	}
}

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    
    if (key == 81) {
		sendOrb("quas")
    }else if (key == 87) {
		sendOrb("wex")
    }else if (key == 69){
		sendOrb("exort")
	} else if (key == 82){
		evalOrbs()
	}
};

