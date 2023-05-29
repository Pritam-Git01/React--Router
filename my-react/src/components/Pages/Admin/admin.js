import React from "react";
import styles from "./admin.module.css";
import { useState } from "react";

const Admin = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState("");
  const [answer, setAnswer] = useState("");

  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question && options && answer) {
      const detail = {
        id: new Date().getTime().toString(),
        question,
        options,
        answer,
      };

      setList((list) => {
        return [...list, detail];
      });
      setQuestion("");
      setOptions("");
      setAnswer("");
    }
  };

  return (
    <div className={styles.admin}>
      <h2>Welcome, Admin Portal</h2>

      <article>
        <form onClick={handleSubmit}>
          <div className={styles.inputs}>
            <label htmlFor="question">Question :</label>
            <input
              type="text"
              name="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          <div className={styles.inputs}>
            <label htmlFor="options">Options : </label>
            <input
              type="text"
              name="options"
              value={options}
              onChange={(e) => setOptions(e.target.value)}
            />
          </div>

          <div className={styles.inputs}>
            <label htmlFor="correct-answer">Answer : </label>
            <input
              type="text"
              name="correct-answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>

          <div>
            <button className={styles.btn} type="submit">
              Submit
            </button>
          </div>
        </form>
        {list.map((item) => {
          const { id, question, options, answer } = item;
          return (
            <>
              <div className={styles.questionList} key={id}>
                <h4>{question}</h4>
                <li>{options}</li>
                <p>{answer}</p>
              </div>
            </>
          );
        })}
      </article>
    </div>
  );
};

export default Admin;
