// Method 1

function EnemyClass(name, hitPoints, defense){
	this.name = name;
	this.hp = hitPoints;
	this.def = defense;

	this.init = function(){
		console.log('Initiliaze func')
	}

	this.die = function(){
		console.log('enemy dies');
	}

	this.attack = function(){
		console.log('enemy attacks');
	}
}

// Method 2

class Ally{
	constructor(fName, lName, hitPoints, magicPoints){
		this.fName = fName;
		this.lName = lName;
		this.hp = hitPoints;
		this.mp = magicPoints;
	}

	castMagic(magicPoints){
		console.log('Draining Magic Points and starting to cast magic');
	}

	changeHitpoints(newHitpointsValue){
		this.hp = newHitpointsValue;
		return `${this.fName} ${this.lName}'s HP is now: ${this.hp}`;
	}

	static KillAllies(){
		return 'killing all allies';
	}
}