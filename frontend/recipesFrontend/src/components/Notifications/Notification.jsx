import { useState, useEffect } from "react";
export default function Notification({ error, setError }) {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (error !== "") {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  }, [error]);

  return (
    showError && (
      <div className="border-white border-2 mt-3 ">
        <div className="text-white text-md ">{error}</div>
      </div>
    )
  );
}
