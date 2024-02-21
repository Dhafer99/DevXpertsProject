// event.ts

import { Image } from "./image";

export class Event {
    id!: number;
    type!: EventType; // Assuming EventType is also transformed to TypeScript
    name!: string;
    date!: Date;
    createdAt!: Date;
    createdBy!: number;
    note!: string;
    viewsCounter!: number;
    interestedCounter!: number;
    active!: boolean;
    rating!: number;
    collaboration!: boolean;
    lastModifiedAt!: Date;
    lastModifiedBy!: number;
    depositNotes!: string;

      imageUrl?:string
     imageId?:string
  
    interestedBys?: InterestedBy[]; // Assuming InterestedBy is another TypeScript interface
    images?: Image[];
    ratings?: Rating[];
  }
  
  // Assuming the following interfaces for related entities
  
  export class InterestedBy {
    id!: number;
    userID!: number;
    eventID!: number;
    timestamp!: Date;
  }

  export class Rating {
    id!: number;
    userID!: number;
    eventID!: number;
    rating!: number;
    comment!: string;
  }
  
// event-type.enum.ts

export enum EventType {
    Enterprise_Day = "Enterprise Day",
    Club_Day = "Club Day",
    Association_Day = "Association Day",
  }
  