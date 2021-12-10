import { sleep, isEmail, isNumber } from '../helpers/utils';
import APIService from '../services/apiService';
export default class Message {


    async getMessageStatus() {
        const API = new APIService();
        const result = await API.GET("/get-status", {});
        return result;
    }

    async toggleStatus() {
        const API = new APIService();
        const result = await API.POST("/toggle", {
        });
        return result;
    }


}