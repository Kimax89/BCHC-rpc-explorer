var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");
var bchc = require("./coins/bchc.js");

module.exports = {
	"BTC": btc,
	"LTC": ltc,
	"BCHC": bchc,

	"coins":["BTC", "LTC", "BCHC"]
};