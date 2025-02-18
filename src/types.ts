export enum ProposalType {
  VALENTINES = 'Valentines',
  PROM = 'Prom',
  DATE = 'Date',
}

export interface Qualities {
  goodQualities: string[];
  badQualities: string[];
}

export interface IProposalConfig {
  ProposalType: ProposalType;
  SignificantOtherName: string;
  UserFullName: string;
  PremedQualities: boolean;
  Qualities: Qualities;
  SignificantOtherPicture: null;
  OtherPictures: null;
  BigQuestionButtonTexts: string[];
  LoveNote: string;
}
