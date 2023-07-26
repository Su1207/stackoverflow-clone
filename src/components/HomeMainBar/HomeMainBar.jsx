import React, { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HomeMainBar.css";
import QuestionsList from "./QuestionsList";

const HomeMainBar = () => {
  var questionsList = [
    {
      id: 1,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongo db"],
      userPosted: "mano",
      userId: 1,
      askedOn: "Jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "Jan 2",
          userId: 2,
        },
      ],
    },
    {
      id: 2,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      userId: 1,
      askedOn: "Jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "Jan 2",
          userId: 2,
        },
      ],
    },
    {
      id: 3,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      userId: 1,
      askedOn: "Jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "Jan 2",
          userId: 2,
        },
      ],
    },
  ];
  const location = useLocation();

  const user = 1;
  const navigate = useNavigate();

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup is required");
      navigate("/Auth");
    } else {
      navigate("/AskQuestions");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Questions
        </button>
      </div>
      <div>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <Fragment>
            <p>{questionsList.length} questions</p>
            <QuestionsList questionList={questionsList} />
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default HomeMainBar;
