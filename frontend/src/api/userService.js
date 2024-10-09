import apiClient from "./apiClient";

export async function getUserData() {
	console.log(localStorage.getItem("token"));
	const data = await apiClient.get("api/auth/users/me/");

	return data;
}
