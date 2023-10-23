// reducers.ts
import { combineReducers, Reducer } from "redux";
import { DonateType, FormData } from "./formtypes";
import { createSlice } from "@reduxjs/toolkit";
import { setFormActions } from "./actions";

const initialState: FormData = {
  gdpr: false,
  formNumber: 1,
  done: false,

  shelter: undefined,
  option: DonateType.specific,
  shelterList: [],
  amount: 50,

  name: "",
  secondName: "",
  email: "",
  phone: "",

  nameError: "",
  secondNameError: "",
  emailError: "",
  phoneError: "",
};

const FormSlice = createSlice({
  reducers: setFormActions,
  initialState: initialState,
  name: "form",
});

export const {
  setOption,
  setShelter,
  saveShelterList,
  setAmount,
  setName,
  setSecondName,
  setEmail,
  setPhone,
  setGdpr,
  nextStep,
  prevStep,
  setDone,
} = FormSlice.actions;

export default FormSlice.reducer;
