// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	try {
		if (currency > 10000) throw new Error("You are rich, my friend! We don't have so much coins for exchange");

	    var change = {};
	    if (currency >= 50) {
	    	change.H = Math.floor(currency / 50);
	        var amount = change.H * 50; // amount of exchanged money by certain coins
	    	currency -= amount;
	    }
	    if (currency >= 25) {
	    	change.Q = Math.floor(currency / 25);
	        amount = change.Q * 25;
	    	currency -= amount;
	    }
	    if (currency >= 10) {
	    	change.D = Math.floor(currency / 10);
	        amount = change.D * 10;
	    	currency -= amount;
	    }
	    if (currency >= 5) {
	    	change.N = Math.floor(currency / 5);
	        amount = change.N * 5;
	    	currency -= amount;
	    }
	    if (currency >= 1) {
	    	change.P = currency;
	    }
	    return change;
	}
	catch (error) {
		return {error: error.message};
	}
}
