import { atom } from "recoil";
import { pastelEarthTheme, retroTealTheme, vintageBeigeTheme } from "./theme";

export const chooseTheme = atom({
  key: "chooseTheme",
  default: pastelEarthTheme,
});
