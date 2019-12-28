import axios from "axios";

export function fetch(url, params) {
	return new Promise((resolve, reject) => {
		axios.get(url, params)
			.then(res => {
				resolve(res.data);
			})
			.catch(error => {
				reject(error);
			})
	})
}

export default {
	productApi() {
		return fetch('http://iot.test/api/v1/products');
	},
	categoryApi() {
		return fetch('http://iot.test/api/v1/category');
	}
}