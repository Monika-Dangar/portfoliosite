import React from "react";
import dynamic from "next/dynamic";

const SignupForm = dynamic(
  () => import("../SignupForm").then((mod) => mod.SignupForm),
  { ssr: false }
);

const Contact = () => {
  return (
    <div>
      <SignupForm />
    </div>
  );
};

export default Contact;
