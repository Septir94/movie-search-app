import { decryptText, encryptText } from "../configs/encrypt";

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem("state");
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(decryptText(serializedState));
	} catch (err) {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("state", encryptText(serializedState));
	} catch (err) {
		//
	}
};