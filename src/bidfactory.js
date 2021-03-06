var utils = require('./utils.js');

/**
	Required paramaters
		bidderCode,
		height,
		width,
		statusCode
	Optional paramaters
		adId,
		cpm,
		ad,
		adUrl,
		dealId,
		priceKeyString;
 */
function Bid(statusCode) {
	var _bidId = utils.getUniqueIdentifierStr(),
		_statusCode = statusCode || 0;
	this.bidderCode = '';
	this.width = 0;
	this.height = 0;
	this.statusMessage = _getStatus();
	this.adId = _bidId;

	function _getStatus() {
		switch (_statusCode) {
			case 0:
				return 'Pending';
			case 1:
				return 'Bid available';
			case 2:
				return 'Bid returned empty or error response';
			case 3:
				return 'Bid timed out';
		}
	}
	this.getStatusCode = function() {
		return _statusCode;
	};

	function _setStatusCode(status) {
		this._statusCode = status;
		//update status msg
		this._statusMessage = this._getStatus();
	}
	//returns the size of the bid creative. Concatenation of width and height by ‘x’.
	this.getSize = function() {
		return this.width + 'x' + this.height;
	};

}

// Bid factory function.
exports.createBid = function(statusCde) {
	return new Bid(statusCde);
};

//module.exports = Bid;