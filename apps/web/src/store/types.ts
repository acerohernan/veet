export enum DrawerSection {
  People = "People",
  Information = "Information",
}

export interface Room {
  id: string;
}

// shared properties
interface Participant {
  id: string;
  name: string;
}

export interface LocalParticipant extends Participant {}

export interface RemoteParticipant extends Participant {}
