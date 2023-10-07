import { UserC } from "./contest.jsx";

import "./checkbox.css";
export default function Quizes() {
  const userContext = UserC();

  function handleClick(event) {
    event.preventDefault();
    if (userContext.counter === 4) {
      userContext.setUserState("Finish");
    }
    userContext.setCounter((prev) => prev + 1);
    userContext.setSelectedOption(null);
  }
  function handleResult(index) {
    if (index === userContext.db.questions[userContext.counter].correctOption) {
      userContext.setResult((prev) => prev + 1);
    }
    }
    
  return (
    <>
      <h1>Quiz Number {userContext.counter + 1}</h1>
      <p>{userContext.db.questions[userContext.counter].question}</p>
      <div className="questions">
        <ul className="question">
          {userContext.db.questions[userContext.counter].options.map((option, index) => (
            <li key={index} className="box">
              <label className="container">
                <input
                  type="radio"
                  name="quizOptions"
                  value={option}
                  checked={index === userContext.selectedOption}
                  onChange={() => {
                    handleResult(index);
                    userContext.setSelectedOption(index);
                  }}
                />
                <div className="checkmark"></div>
              </label>{" "}
              {option}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleClick}>{userContext.userState}</button>
    </>
  );
}
