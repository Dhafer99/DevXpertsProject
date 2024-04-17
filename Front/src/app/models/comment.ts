import {Post} from './post';
import { User } from './user';

export class Comment{
  idComment!: number;
  likesComment!: number;
  mostPertinentComment!: boolean;
  textComment!: string;
  dateCreationComment!: string ;
  post!: Post;
  userId:number
  fullUser:User
}