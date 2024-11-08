"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./SignIn.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const SignIn = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <div id="signin">
      <div className="container">
        <div className="signin">
          {!session ? (
            <div className="signin-google">
              <h1>Sign In </h1>
              <button onClick={() => signIn("google")}>
                <FcGoogle />
                <span> Sign In with Google</span>
              </button>
              <button onClick={() => signIn("github")}>
                <FaGithub />
                <span>Sign In with GitHub</span>
              </button>
            </div>
          ) : (
            <div className="images">
              <img src={session.user.image} alt="img" />
              <h5>{session.user.name}</h5>
              <button onClick={() => signOut()}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
