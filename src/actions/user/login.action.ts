"use server";

const loginUser = async(formdata: FormData) =>{
    const userName = formdata.get("user-name") as string;
    const password = formdata.get("password") as string;
    const loginUser = {
        userName, password
    }
    console.log("loginUser", loginUser)
}

export default loginUser;