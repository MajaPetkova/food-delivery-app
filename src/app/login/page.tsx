import Image from "next/image";
import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="">
      {/* Box  */}
      <div className="">
        {/* Image Container  */}
        <div className="relative ">
          <Image src="/loginBg.png" alt="img" fill />
        </div>
        {/* Form Container  */}
        <div className="">
          <h1>Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100">
            <Image src="/google.png" alt="" width={20} height={20} className="object-contain"/>
            <span>Sign in with google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100">
            <Image src="/facebook.png" alt="" width={20} height={20} className="object-contain"/>
            <span>Sign in with facebook</span>
          </button>
          <p>Have a problem? <Link href="/">Contact us</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
