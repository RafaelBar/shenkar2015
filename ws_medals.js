var events = require('events');
var util = require('util');
util.inherits(competition, events.EventEmitter);

//--- Acount Object Constructor ------
function competition () {
	this.balance = 0;
	this.msg = "";
	events.EventEmitter.call(this);

}

//--- competition Object prototype ------
competition.prototype.youWin = function(amount) {
	this.balance += amount;
	this.emit('endOfCompetition'); //emit (=fire) event
};
competition.prototype.youLose = function(amount) {
	this.balance -= amount;
	this.emit('endOfCompetition'); //emit (=fire) event
};

//--- the callbacks functions ------
function displayBalance() {
	console.log("competition balance is: " + this.balance);
	this.msg += "competition balance is: " + this.balance + "\n";
}
function checkOverdraw() {
	if(this.balance < 0){
		console.log("cannot be ->" + this.balance);
		this.msg += "cannot be ->" + this.balance + "\n";
	}
}




module.exports = function (str){
	var com = new competition();
	com.on("endOfCompetition", displayBalance);
	com.on("endOfCompetition", checkOverdraw);
    return com;
};
