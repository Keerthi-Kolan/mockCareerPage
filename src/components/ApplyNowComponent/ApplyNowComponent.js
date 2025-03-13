import { useState } from "react";
import React from "react";
import "./ApplyNowComponent.css";
const ApplyNowComponent = () => {
  const [copied, setCopied] = useState(false);
  const email = "jobs@wegive.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true); // Update state to show email text
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };
  return (
    <div className="applyNow">
      <h2>Apply to this position</h2>
      <br></br>
      <p> Follow this link to apply for this position </p>
      <br></br>
      <p> Resume required</p>
      <br></br>
      {!copied ? (
        <button onClick={copyToClipboard}>Apply now &rarr;</button>
      ) : (
        <div className="copiedToClipboard">
          <span>Email copied to clipboard</span>
          <br></br>
          <span>Please mail us your resume</span>
          <br></br>
          <span>All the best!</span>
        </div>
      )}
    </div>
  );
};

export default ApplyNowComponent;
