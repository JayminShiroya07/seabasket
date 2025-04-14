import React, { useEffect } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { toast } from "react-toastify";
import { changePasswordModal } from "../data/modals/userModal";
import { useAppDispatch } from "../store/slices";
import { changePassword } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const ChangePassword: React.FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();


  function onChangePassword(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const old_password = formData.get("oldpassword")?.toString().trim() || "";
    const new_password = formData.get("newpassword")?.toString().trim() || "";
    const cpassword = formData.get("cpassword")?.toString().trim() || "";

    if (old_password === '' && new_password === '' && cpassword === '') {
      toast.error("All fields are requier");
      return;
    }

    if (new_password !== cpassword) {
      toast.error("New Password and Comfirm password should be same.");
      return;
    }

    const changeData : changePasswordModal = {
        old_password,
        new_password
    }

    const token = localStorage.getItem("AuthToken") || "";
    dispatch(changePassword({changeData,token,navigate}));

  }

  return (
    <div className="md:h-[calc(100vh-21rem)] flex justify-center items-start md:items-center p-5">
      <div className="w-full max-w-2xl border-2 bg-white rounded-xl overflow-hidden shadow-lg">
        <header className="bg-dark-green text-center shadow-md text-white py-4">
          <h1 className="font-bold text-3xl">Change Password</h1>
        </header>
        <main className="p-6">
          <form className="space-y-6" onSubmit={onChangePassword}>
            <Input
              placeHolder="Enter Your Old Password"
              type="password"
              label="Old Password"
              className="w-full"
              name="oldpassword"
            />
            <Input
              placeHolder="Enter Your New Password"
              type="password"
              label="New Password"
              className="w-full"
              name="newpassword"
            />
            <Input
              placeHolder="Enter Your Comfirm Password"
              type="password"
              label="Comfirm Password"
              className="w-full"
              name="cpassword"
            />
            <Button
              type="submit"
              className="text-white mt-3 px-3 py-2 bg-dark-green rounded-md border-[1px] border-black"
              name="Change Password"
            />
          </form>
        </main>
      </div>
    </div>
  );
};

export default ChangePassword;
