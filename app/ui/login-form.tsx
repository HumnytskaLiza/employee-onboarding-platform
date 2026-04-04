"use client";

// import { useActionState } from "react";
// import { authenticate } from "../../lib/actions";
// import { useSearchParams } from "next/navigation";

export default function LoginForm() {
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl") || "/";
  // const [errorMessage, formAction, isPending] = useActionState(
  //   authenticate,
  //   undefined,
  // );

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      {/* <form action={formAction} className="space-y-6"> */}
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm/6 font-medium ">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base 
                outline-gray-300 outline placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 font-medium ">
              Password
            </label>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-400 hover:text-indigo-300"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="block w-full outline-gray-300 outline rounded-md bg-white/5 px-3 py-1.5 text-base   -outline-offset-1  placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>
        </div>

        {/* <div>
          <input type="hidden" name="redirectTo" value={callbackUrl} />
          <button
            type="submit"
            // aria-disabled={isPending}
            className="flex w-full justify-center rounded-md bg-[#cce7d9] px-3 py-1.5 text-sm/6 font-semibold hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Sign in
          </button>
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
        </div> */}
      </form>
    </div>
  );
}
