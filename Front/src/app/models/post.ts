import { Comment } from "./comment";
export class Post{
    idPost!: number;
    featuredSubject!: boolean;
    title!: string;
    image!:string;
    descriptionSubject!: string;
    likesSubject!: number;
    comment!: Comment[];
  }

 