// Body
module.exports = (error, data = {}) => ({
	success: !error,
	error: error,
	data,
});
