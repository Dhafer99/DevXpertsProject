// event.ts

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
    disableDate!: Date;
    rating!: number;
    collaboration!: boolean;
    lastModifiedAt!: Date;
    lastModifiedBy!: number;
    depositNotes!: string;
  
    interestedBys?: InterestedBy[]; // Assuming InterestedBy is another TypeScript interface
    collaborations?: Collaboration[];
    ratings?: Rating[];
  }
  
  // Assuming the following interfaces for related entities
  
  export class InterestedBy {
    id!: number;
    userID!: number;
    eventID!: number;
    timestamp!: Date;
  }
  
  export class Collaboration {
    id!:number;
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
    EnterpriseDay = 'Enterprise_Day',
    ClubDay = 'Club_Day',
    AssociationDay = 'Association_Day',
  }
  