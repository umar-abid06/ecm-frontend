import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
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
  );
}
