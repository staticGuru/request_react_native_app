import axios from "axios";
import config from "./config";
import {Alert} from "react-native";

const BASE_API = config.BASE_API;
//Authendications
async function signUpApi(requestBody) {
    const requestUrl = `${BASE_API}/signup`;
    console.log("request", requestUrl,requestBody);
    try {
        return await axios.post(requestUrl, requestBody, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(value => {
                console.log("valuefromapisections",value)
                if (value.status !== 200) return Alert.alert("Something went wrong");
                return value.data;
            })
            .catch(err => Alert.alert(err.message));
    } catch (error) {
        return error.response;
    }
}

async function signInApi(requestBody) {
    const requestUrl = `${BASE_API}/login`;
    console.log("signInApi", requestBody, requestUrl);
    try {
        return await axios
            .post(requestUrl, requestBody, {
                headers: {
                    "Content-Type": "application/json",
                },
            })

            .then(value => {
                if (value.status !== 200) return Alert.alert("Something went wrong");
                return value.data;
            })
            .catch(err => Alert.alert(err.message));
    } catch (error) {
        return error.response;
    }
}
async function getVerificationPin(requestBody) {
    const requestUrl = `${BASE_API}/verificationpin`;
    console.log("requestBody", requestBody);
    try {
        return await axios
            .post(requestUrl, requestBody, {
                headers: {
                    "Content-Type": "application/json",
                },
            })

            .then(value => {
                // if (value.status !== 200) return Alert.alert("Something went wrong");
                // return value.data;
                console.log(value);
                return;
            })
            .catch(err => console.log(err));
    } catch (error) {
        return error.response;
    }
}

export {signUpApi, signInApi, getVerificationPin};
