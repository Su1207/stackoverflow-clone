import React from "react";
import QuestionDetails from "./QuestionDetails";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";

const DisplayAnswer = ({ question }) => {
  return (
    <div className="">
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans.id}>
          <p>{ans.answerBody}</p>
          <div className="question-action-user">
            <div>
              <button type="button">Share</button>
              <button type="button">Delete</button>
            </div>
            <div>
              <p>answered {ans.answeredOn}</p>

              <Link to={`/User/${ans.userId}`} className="user-link">
                <Avatar backgroundColor="green" px="8px" py="5px">
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
