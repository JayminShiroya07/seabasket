import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../store/slices";
import { resetPassword } from "../store/slices/userSlice";

const ForgotPassword: React.FC = () => {
  const { token } = useParams<{ token: string }>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function onResetPassword(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newPassword = formData.get("newpassword")?.toString().trim() || '';

    const userFormData = new URLSearchParams();

    userFormData.append("token", token || '');
    userFormData.append("new_password", newPassword);

    dispatch(resetPassword({userFormData,navigate}));
  }

  return (
    <>
      <div className="md:h-[calc(100vh-21rem)] flex justify-center items-start md:items-center p-5">
        <div className="w-full max-w-2xl border-2 bg-white rounded-xl overflow-hidden shadow-lg">
          <header className="bg-dark-green text-center shadow-md text-white py-4">
            <h1 className="font-bold text-3xl">Reset Password</h1>
          </header>
          <main className="p-6">
            <form className="space-y-6" onSubmit={onResetPassword}>
              <Input
                placeHolder="Enter Your New Password"
                type="password"
                label="New Password"
                className="w-full"
                name="newpassword"
              />
              <Button
                type="submit"
                className="text-white mt-3 px-3 py-2 bg-dark-green rounded-md border-[1px] border-black"
                name="Reset Password"
              />
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
