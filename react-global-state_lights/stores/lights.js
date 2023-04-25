import create from "zustand";

export const useLightsStore = create((set, get) => ({
  lights: [],
}));
