import { PayloadAction } from "@reduxjs/toolkit";
import { DonateType, FormData } from "./formtypes";

export const setFormActions = {
  setOption: (state: FormData, action: PayloadAction<DonateType>) => {
    state.option = action.payload;
  },
  setShelter: (state: FormData, action: PayloadAction<number>) => {
    state.shelter = action.payload;
  },
  saveShelterList(
    state: FormData,
    action: PayloadAction<{ id: number; name: string }[]>
  ) {
    state.shelterList = action.payload;
  },
  setAmount: (state: FormData, action: PayloadAction<number>) => {
    state.amount = action.payload;
  },
  setName: (state: FormData, action: PayloadAction<string>) => {
    state.name = action.payload;

    let name: string = action.payload;
    state.nameError = "";

    if (name !== "" && name.trim().length < 2) {
      state.nameError = "Zmeň meno na dlhšie";
    }
    if (name !== "" && name.trim().length > 20) {
      state.nameError = "Zmeň meno na kratšie";
    }
    if (!/^[a-zA-Z]+$/) {
      state.nameError = "Zmeň mano na iné znaky";
    }
  },
  setSecondName: (state: FormData, action: PayloadAction<string>) => {
    state.secondName = action.payload;

    let secondName: string = action.payload;
    state.secondNameError = "";

    if (secondName.trim().length < 2) {
      state.secondNameError = "Zmeň priezvisko na dlhšie";
    }
    if (secondName.trim().length > 30) {
      state.secondNameError = "Zmeň priezvisko na kratšie";
    }
    if (!/^[a-zA-Z]+$/) {
      state.secondNameError = "Zmeň priezvisko na iné znaky";
    }
  },
  setEmail: (state: FormData, action: PayloadAction<string>) => {
    state.email = action.payload;
    state.emailError = "";
    let email = action.payload;

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      state.emailError = "Zadaj správny mail";
    }
  },
  setPhone: (state: FormData, action: PayloadAction<string>) => {
    state.phone = action.payload;

    let number = action.payload;
    state.phoneError = "";

    if (number.length != 13 || !/^\+[0-9]+$/.test(number)) {
      state.phoneError = "Zmeniť telefónne číslo.";
    }
  },
  setGdpr: (state: FormData, action: PayloadAction<boolean>) => {
    state.gdpr = action.payload;
  },

  nextStep: (state: FormData) => {
    state.formNumber += 1;
  },
  prevStep: (state: FormData) => {
    if (state.formNumber > 1) state.formNumber -= 1;
  },

  setDone(state: FormData, action: PayloadAction<boolean>) {
    state.done = action.payload;
  },
};
