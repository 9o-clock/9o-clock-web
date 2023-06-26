
export class QuizPublicId {
    readonly value: string;

    constructor(value: string) {
        if (!value || value.trim().length === 0) console.warn("QuizPublicId.value must not be null");
        this.value = value;
    }
}

export class Quiz {
    readonly publicId: QuizPublicId;
    readonly title: string;
    readonly content: string;
    readonly choices: readonly Choice[];
    readonly releaseAt: Date;
    readonly answerReleaseAt: Date;

    constructor(publicId: QuizPublicId, title: string, content: string, choices: readonly Choice[], releaseAt: Date, answerReleaseAt: Date) {
        if (!publicId) console.warn("Quiz.publicId must not be null");
        if (!title || title.trim().length === 0) console.warn("Quiz.title must not be null");
        if (!content || content.trim().length === 0) console.warn("Quiz.content must not be null");
        if (!choices || choices.length < 1) console.warn("Quiz.choices must not be null");
        if (!releaseAt) console.warn("Quiz.releaseAt must not be null");
        if (!answerReleaseAt) console.warn("Quiz.answerReleaseAt must not be null");
        this.publicId = publicId;
        this.title = title;
        this.content = content;
        this.choices = choices;
        this.releaseAt = releaseAt;
        this.answerReleaseAt = answerReleaseAt;
    }
}

export class ChoicePublicId {
    readonly value: string;

    constructor(value: string) {
        if (!value || value.trim().length === 0) console.warn("ChoicePublicId.value must not be null");
        this.value = value;
    }
}

export class Choice {
    readonly publicId: ChoicePublicId;
    readonly text: string;

    constructor(publicId: ChoicePublicId, text: string) {
        if (!publicId) console.warn("Choice.publicId must not be null");
        if (!text || text.trim().length === 0) console.warn("Choice.text must not be null");
        this.text = text;
        this.publicId = publicId;
    }
}

export class QuizSubmit {
    readonly quizPublicId : QuizPublicId;
    readonly choicePublicId: ChoicePublicId;

    constructor(quizPublicId: QuizPublicId, choicePublicId: ChoicePublicId) {
        if (!quizPublicId) console.warn("QuizSubmit.quizPublicId must not be null");
        if (!choicePublicId) console.warn("QuizSubmit.choicePublicId must not be null");
        this.quizPublicId = quizPublicId;
        this.choicePublicId = choicePublicId;
    }
}