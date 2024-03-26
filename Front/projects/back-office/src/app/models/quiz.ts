

export class Test {
    id!: number;
    title!:string;
    description!:string;
    image!:string;
    active!:boolean;
    userTests!:UserTest[];
    questions!:Question[];

  }



export class Question {
    id!: number;
    question!:string;
    image!:string;
    questionOptions!:QuestionOption[];


  }

export class QuestionOption {
    id!: number;
    answer!:string;
    iscorrect!:boolean;
    isSelected: boolean = false;
  }


export class UserTest {
    id!: number;
    score!:string;
    date!:Date;
    user!:string;
    test!:Test;
   

  }

  export class Quiz {
    nom!: string;
    quizz!:QQ[];

  }
  class QQ {
    id!: number;
    question!: string;
    propositions!:string[];
    réponse!: string;
    anecdote!: string;
  }