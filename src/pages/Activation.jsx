import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/layout/header";
import Navbar from "../components/layout/navbar";
import styles from "../styles/styles";

export default function Activation() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const message = searchParams.get("message");

  const [activationMessage, setActivationMessage] = useState("");

  useEffect(() => {
    if (status === "verified") {
      setActivationMessage(
        "Your account has been successfully verified! You can now log in."
      );
    } else if (status === "error") {
      setActivationMessage(
        decodeURIComponent(message) || "Activation failed. Please try again."
      );
    }
  }, [status, message]);

  return (
    <>
      <div className="p-10  min-h-screen bg-gray-100">
        <div className={`${styles.section}`}>
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
              />
            </Link>
          </div>
          <div>
            <h1 className=" text-3xl text-center">
              {status === "verified"
                ? "Welcome to ECM Marketplace"
                : "Activation Failed! Try Registering Again after some time"}
            </h1>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center mx-auto mt-10">
          {status === "verified" ? (
            <>
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Account Verified
              </h2>
              <p className="text-gray-700 mb-6">{activationMessage}</p>
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Go to Login
              </Link>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                Activation Failed
              </h2>
              <p className="text-gray-700 mb-6">{activationMessage}</p>
              <Link
                to="/"
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Back to Home
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
