import { apiUrl } from '../config';
import axios from 'axios';

export default class APIService {
    constructor() {
        this.apiUrl = apiUrl;
        this.axios = axios.defaults;
    }

    async POST(endPoint, params) {
        return new Promise((resolve, reject) => {
            let req = {
                baseURL: this.apiUrl,
                method: "POST",
                data: params,
                url: endPoint,
            };
            axios(req).then((response) => {
                const { headers, data, status } = response;
                resolve(data);
            })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    async GET(endPoint, params) {
        return new Promise((resolve, reject) => {
            let req = {
                baseURL: this.apiUrl,
                method: "GET",
                data: params,
                url: endPoint,
            };
            axios(req).then((response) => {
                const { headers, data, status } = response;
                resolve(data);
            })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}