import React from 'react';
import Button from '@/components/QuizAnswerButton'
import {Choice, ChoicePublicId} from "@/types/quiz";
function App() {
  return (
    <div className="App">
      <Button choice={new Choice(new ChoicePublicId("aa"), "hi")}/>
    </div>
  );
}

export default App;
