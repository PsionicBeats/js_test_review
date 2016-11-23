//Create following variables
var knight = "Arthur";
var maiden = "Guinevere";
var monster = "Dragon";

//Create Array
weaponChest = ("Mace", "Sorcerer's Stone", "Excalibur")

//Create object named hero
var hero;
var wizard = "Merlin";
var weapon = 2;
var power = 45;

//Hail the King
function swordInTheStone(worthy) {
	if (worthy = "Arthur") {
		console.log("We have found our King " + knight);
	}else{
		console.log("We must keep searching, for " + knight + " is unworthy.");
	}
}
worthy(knight);

//Hail the King and Queen
function trueLove(queen, king) {
	if (queen = "Guinevere" && king = "Arthur") {
		console.log("On this day our " + maiden + "and" + knight + " shall rule happily ever after");
	}else{
		console.log("We must keep searching, for true love must reign over Camelot");
	}
}
queen(maiden);
king(knight);

//Merlin and Monster
function epicBattle(wizard, enemy, power) {
	if (power < 15 || power = 15) {
		console.log("Our " + wizard + " has fallen.");
	}else if (power > 16 || power = 16){
		console.log(wizard + " has almost slain the " + monster);
	}else{
		console.log("Our " + wizard + " has slain the " + monster);
	}
}