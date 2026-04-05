"use client";

import LoginForm from "../ui/login-form";
import Header from "../ui/header";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="flex flex-col h-full justify-center px-6 py-12 lg:px-8">
      <div className="flex flex-col justify-center items-center sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="text-3xl">📕</div>
        <Header name="Sign in to your account" type="header" />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
