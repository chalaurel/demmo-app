import { TypedUseSelectorHook, useDispatch as useReduxDisplatch, useSelector as useReduxSelector } from "react-redux";
import type { RootState, AppDispatch } from "./index";

export const useDispatch = () => useReduxDisplatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
