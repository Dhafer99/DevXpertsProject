import { Comment } from "./comment";
import { Tag } from "./tag";
export class Post{
    idPost!: number;
    featuredSubject!: boolean;
    title!: string;
    image!:string;
    descriptionSubject!: string;
    likesSubject!: number;
    dateCreationPost!: string;
    video!:string;
    comment!: Comment[];
    postTags!: Tag[];
  }

 