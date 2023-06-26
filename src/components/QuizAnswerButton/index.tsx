import Button from 'react-bootstrap/Button';
import {Choice} from "@/types/quiz";
import React from "react";

export default function QuizChoiceButton(args:{choice:Choice}) {
    return (
        <Button>
            {args.choice.text}
        </Button>
    )
}
