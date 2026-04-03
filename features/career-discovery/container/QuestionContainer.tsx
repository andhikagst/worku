import React from "react";
import Question from "../components/question/Question";

const QuestionContainer = () => {
  return (
    <main className="flex flex-col overflow-hidden min-h-screen w-full">
      <Question />
    </main>
  );
};

export default QuestionContainer;
