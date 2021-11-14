/* eslint-disable @typescript-eslint/no-explicit-any */

const ok = async (response: any) => {
	return {
		statusCode: 200,
		response: response
	};
}; 

export {
	ok
};