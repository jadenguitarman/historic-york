exports.handler = async (event, context) => {
	const message = "Donation complete";
    return {
        statusCode: 200,
        body: JSON.stringify({ message })
    };
};
