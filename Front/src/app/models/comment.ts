import {Post} from './post';

export class Comment{
  idComment!: number;
  likesComment!: number;
  mostPertinentComment!: boolean;
  textComment!: string;
  dateCreationComment!: string ;
  post!: Post;
 

}