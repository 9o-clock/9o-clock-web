import { Progress } from '@chakra-ui/react'
import {Choice} from "@/types/quiz";
import React from "react";

export default function QuizChoiceButton(args: { choice: Choice }) {
    const progress = 65;
    return (
        <>
            <Progress isAnimated={true} hasStripe value={64}>
            </Progress>
        </>
    )
}
