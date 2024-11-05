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

export interface DomainType {
  label: string;
  value: string;
}

export interface CountryCodeType extends DomainType {}

export interface ReservationType {
  id: string;
  boothId: string;
  applicantsCount: number;
  status: string;
  reservedAt: string;
  language: string;
  email?: string;
  countryCallingCode?: string;
  phoneNumber?: string;
}
export interface SuccessReservationType extends ReservationType {
  name: string;
  locationDescription: string;
  startTime: string;
  endTime: string;
  maxPersonsByTeam: number;
}

export interface ReservationSubmitType {
  boothId: string;
  applicantsCount?: number;
  locationDescription: string;
  startTime: string;
  endTime: string;
  maxPersonsByTeam: number;
  status: string;
  reservedAt: string;
  language: string;
  email?: string;
  countryCallingCode?: string;
  phoneNumber?: string;
}
