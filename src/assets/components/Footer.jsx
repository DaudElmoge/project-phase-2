import React, { useState } from "react";

function Footer() {
  const [feedback, setfeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setfeedback("");
  };
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} zuru Shuttles. All rights reserved.
      </p>
      <form on submit={handleSubmit} style={{ marginTop: "15px" }}>
        <input
          type=""
          placeholder=""
          value={feedback}
          onchange={(e) => setfeedback(e.target.value)}
        />
        <button type="submit">feedback</button>
      </form>
    </footer>
  );
}

export default Footer;
