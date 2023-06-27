import React from 'react';
import QuizDetail from "./pages/quiz";
import {QuizPublicId} from "@/types/quiz";

function App() {
  return (
    <div className="App">
      <QuizDetail quizPublicId={new QuizPublicId('')}/>
    </div>
  );
}

export default App;
