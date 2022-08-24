import React, { useEffect, useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { name, email, message };

    setIsPending(true);

    fetch("https://test-task-api-optimo.herokuapp.com/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then((response) => {
      console.log(response);
      console.log("blog");
      setIsPending(false);
    });
    console.log(blog);
  };

  return (
    <div className="form-control">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <h1 className="title">Form</h1>
          <label htmlFor="name">Your Name</label>
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            required
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="email">Email</label>
          <input
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="message">Message</label>
          <textarea
            className="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            required
          ></textarea>
        </div>
        <div>
          {!isPending && (
            <button className="submit-button" type="submit">
              Submit
            </button>
          )}
          {isPending && (
            <button className="submit-button" disabled>
              Submit...
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Feedback;
