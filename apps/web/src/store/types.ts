export enum DrawerSection {
  People = "People",
  Information = "Information",
}

export interface Room {
  id: string;
}

// shared properties
export interface Participant {
  id: string;
  name: string;
  identity: string;
  isCameraEnabled: boolean;
}

export interface LocalParticipant extends Participant {}

export interface RemoteParticipant extends Participant {}
