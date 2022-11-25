import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>Setup Quiz</h2>
          {/* {amount} */}
          <div className="form-control">
            <label htmlFor="amount">Number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>
          {error && (
            <p className="error">
              Can't generate questions, please try different options
            </p>
          )}
          <button
            type="submit"
            onClick={handleSubmit}
            className="submit-btn"
          >Start</button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
