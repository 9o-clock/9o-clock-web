import {ProgressBar, Button, FormText} from 'react-bootstrap';
import {Choice} from "@/types/quiz";
import React from "react";

export default function QuizChoiceButton(args: { choice: Choice }) {
    const progress = 65;
    return (
        <>
            <ProgressBar style={{height: '30px'}} now={progress} animated striped variant="success"
                         label={`${progress}% Success`}/>
            <ProgressBar style={{height: '30px'}} now={progress} animated striped variant="success" label={<>
                <>
                    asda
                </>
                <>
                    22222
                </>
            </>}/>
            <ProgressBar>
                <ProgressBar now={20} animated striped variant="success" label={`Ok`} key={1}/>
                <ProgressBar now={20} animated striped variant="info" label={`Bit High`} key={2}/>
                <ProgressBar now={20} animated striped variant="warning" label={`Going High`} key={3}/>
                <ProgressBar now={18} animated striped variant="danger" label={`Alert!!!`} key={4}/>
            </ProgressBar>
        </>
    )
}
