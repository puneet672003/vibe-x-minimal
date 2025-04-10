import type { AxiosError } from 'axios';

import axios from 'axios';

// interface UIMessageAxiosError extends AxiosError {
// 	uiMessage?: string;
// }

const API = axios.create({
	baseURL: 'https://6d16-103-211-12-174.ngrok-free.app/',
	withCredentials: false,
});

API.interceptors.response.use(
	(response) => response,
	(error: AxiosError) => {
		// const uiError = error as UIMessageAxiosError;
		// let errorMessage = 'An unknown error occurred.';
		console.error(error);
		// if (uiError.response) {
		//   const { status, data } = uiError.response;

		//   console.error(`API Error [${status}]:`, data);

		//   if (status === 401) {
		//     errorMessage = "Unauthorized. Please log in again.";
		//   } else if (status === 500) {
		//     errorMessage = "Internal server error. Please try again later.";
		//   } else if (typeof data === "string") {
		//     errorMessage = data;
		//   } else if (typeof data === "object" && data && "message" in data) {
		//     errorMessage = (data as { message: string }).message;
		//   }
		// } else if (uiError.request) {
		//   console.error("No response from server.");
		//   errorMessage = "Network error. Please check your internet connection.";
		// } else {
		//   console.error("Unexpected error:", uiError.message);
		//   errorMessage = uiError.message;
		// }

		// uiError.uiMessage = errorMessage;

		// return Promise.reject(uiError);
	}
);

export default API;
