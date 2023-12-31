export const AmountOptions = [5, 10, 20, 30, 50, 100];

export enum DonateType {
  "whole" = "Chcem finančne prispieť celej nadácii",
  "one" = "Chcem finančne prispieť konkrétnemu útulku",
}

export interface FormData {
  // general
  gdpr: boolean;
  formNumber: number;
  // first
  shelter?: number;
  option: DonateType;
  shelterList: { id: number; name: string }[];
  amount: number;
  // second
  name: string;
  secondName: string;
  email: string;
  phone: string;
  //   Error
  nameError: string;
  secondNameError: string;
  emailError: string;
  phoneError: string;
}
