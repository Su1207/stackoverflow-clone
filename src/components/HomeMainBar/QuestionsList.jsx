import React, { Fragment } from "react";
import Questions from "./Questions";

const QuestionsList = ({ questionList }) => {
  return (
    <Fragment>
      {questionList.map((question) => (
        <Questions question={question} key={question.id} />
      ))}
    </Fragment>
  );
};

export default QuestionsList;
