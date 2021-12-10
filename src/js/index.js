
import Message from '../js/models/message';
var animating = false;
import { sleep, isEmail, isNumber, showErrorToast, showSuccessToast, convertEmojis } from '../js/helpers/utils';
var messageStore = new Message();

const setButton = async () => {
    try {
        let { data: [control] } = await messageStore.getMessageStatus();
        if (control.status == "0") {
            document.getElementById("status_label").innerHTML = `  <button type="button"
            style="height: 100%; width: 30%; border-radius: 12px; color:white; background-color:red; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);"
           > <b>OFF</b></button>`;
            document.getElementById("inner_button_label").innerHTML = `ENABLE`
        }
        if (control.status == "1") {
            document.getElementById("status_label").innerHTML = `  <button type="button"
            style="height: 100%; width: 30%; border-radius: 12px;  color:white; background-color:green; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);"
           > <b>ON</b></button>`;
            document.getElementById("inner_button_label").innerHTML = `DISABLE`
        }
    } catch (error) {
        showErrorToast("Something went wrong. Please try again");
        console.log(error);
    }
}

const toggleStatus = async () => {
    try {
        const response = await messageStore.toggleStatus();
        showSuccessToast(response.message);
        setButton();
    } catch (error) {
        showErrorToast("Something went wrong. Please try again");
        console.log(error);
    }
}

const init = async () => {
    document.querySelector('#toggle_status').addEventListener("click", toggleStatus);
    setButton();
}

window.addEventListener("load", init);
