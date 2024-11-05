export interface BoothItemType {
  id: string;
  name: string;
  queuingStartDateTime: string;
  queuingEndDateTime: string;
  startTime: string;
  endTime: string;
}

export interface BoothDetailItemType extends BoothItemType {
  locationDescription: string;
  maxPersonsByTeam: number;
}
