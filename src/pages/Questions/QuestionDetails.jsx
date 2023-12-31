import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import upVotes from "../../assets/sort-up.svg";
import downVotes from "../../assets/sort-down.svg";
import Avatar from "../../components/Avatar/Avatar";
import "./Questions.css";
import DisplayAnswer from "./DisplayAnswer";

const QuestionDetails = () => {
  var questionsList = [
    {
      id: "1",
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
      id: "2",
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
      id: "3",
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

  const { id } = useParams();

  return (
    <div className="question-details-page">
      {questionsList === null ? (
        <h1>Loading...</h1>
      ) : (
        <Fragment>
          {questionsList
            .filter((question) => question.id === id)
            .map((question) => (
              <div key={question.id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={upVotes}
                        alt="up"
                        width="18"
                        className="votes-icon"
                      />
                      <p>{question.upVotes - question.downVotes}</p>
                      <img
                        src={downVotes}
                        alt="down"
                        width="18"
                        className="votes-icon"
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-action-user">
                        <div>
                          <button type="button">Share</button>
                          <button type="button">Delete</button>
                        </div>
                        <div>
                          <p>asked {question.askedOn}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className="user-link"
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} answers</h3>
                    <DisplayAnswer key={question.id} question={question} />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse other question tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {tag}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      ask your question
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </Fragment>
      )}
    </div>
  );
};

export default QuestionDetails;
