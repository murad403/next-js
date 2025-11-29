/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import axios from "axios"

const allUser = async() =>{
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    } catch (error: any) {
        console.log("Fetching error", error);
        throw new Error("Failed to fetch products");
    }
}

export default allUser;