import React from "react";
import {Quiz, QuizPublicId, Choice, ChoicePublicId} from "@/types/quiz";
import {SimpleGrid, Box} from "@chakra-ui/react";


function getQuiz() {
    return new Quiz(
        new QuizPublicId("qwe"),
        "강아지 VS 고양이",
        "누구?!",
        [
            new Choice(new ChoicePublicId("asd"), "강아지"),
            new Choice(new ChoicePublicId("zxc"), "고양이")
        ],
        Date.prototype,
        Date.prototype
    );
}

export default function QuizDetail(args: { quizPublicId: QuizPublicId }) {
    let quiz = getQuiz();

    return (
        <SimpleGrid
            maxW={'100%'}
            background={'yellow.100'}
            columns={1}
            spacing={5}
            justifyItems={'center'}
            padding={5}>
            <Box fontWeight={'bold'}
                 fontSize={'18'}
                 w={'70%'}
                 display={'flex'}
                 justifyContent={'center'}
                 alignItems='center'>
                {quiz.makeTitleUI()}
            </Box>
            <Box fontWeight={'bold'} w={'100%'} display='flex' justifyContent={'center'}
                 alignItems='center'>
                {quiz.makeContentUI()}
            </Box>
            <Box minW={'25%'} display='flex' maxW={'80%'} justifyContent={'center'} alignItems='center'>
                {quiz.makeChoicesUI()}
            </Box>
        </SimpleGrid>
    )
}
