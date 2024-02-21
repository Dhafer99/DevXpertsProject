import {Post} from './post';

export class Comment{
  idComment!: number;
  likesComment!: number;
  mostPertinentComment!: boolean;
  textComment!: string;
  post!: Post;

}