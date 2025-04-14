export type signupModal = {
    name:string,
    email:string,
    password:string,
    phoneNumber:string,
    status:true
}

export type changePasswordModal = {
    old_password : string,
    new_password : string
}


export type profileModal = {
    email: string;
    name: string;
    phoneNumber: string;
    profilePic: string;
}