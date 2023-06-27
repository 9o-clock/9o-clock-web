import {Quiz, QuizPublicId, Choice, ChoicePublicId} from "@/types/quiz";
import {VStack, Container} from "@chakra-ui/react";

/**
 * 프론트는 상태관리를 고려해서 개발함.
 * 상태의 fresh에 대한 여부 체크는 중요.
 * 다만 상태를 쉽게 공유할 수 있도록 해서 그런지 접근이 넓게 전파되어 있고, 복잡성이 증가됨.
 * API 제공에 따라 관리가 다르게될듯
 *
 * 우선 quizId를 주면 퀴즈의 정보를 제공해주고
 * 해당 퀴즈의 정답을 요청하면 그에 맞추어 줄 생각이였는데...
 *
 * 오늘의 퀴즈를 조회하면 퀴즈 아이디만 덩그러니 주는 것 자체가 내 기준 불만.
 */

const quiz = new Quiz(
    new QuizPublicId("qwe"),
    "강아지 VS 고양이",
    "누구?",
    [
        new Choice(new ChoicePublicId("asd"), "강아지"),
        new Choice(new ChoicePublicId("zxc"), "고양이")
    ],
    Date.prototype,
    Date.prototype
)

export default function QuizDetail(args:{quizPublicId:QuizPublicId}) {
    // quiz 불러오기

    // 화면 그리기

    // 버튼 한 번누르면 딱봐도 한 번더 누르면 제출같은 느낌으로 변경
    // 정답 제출
    return (
        <VStack>
            <Container maxW='md' bg='blue.600' color='white'>
                "md" Container
            </Container>
            <Container maxW='550px' bg='purple.600' color='white'>
                "550px" Container
            </Container>
            <Container maxW='container.sm' bg='green.400' color='#262626'>
                "container.sm" Container
            </Container>
        </VStack>
    )
}
