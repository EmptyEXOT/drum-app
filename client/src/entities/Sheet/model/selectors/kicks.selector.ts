import {RootState} from "@/shared/store/store";

export const selectAllKicks = (state: RootState) => state.sheet.kicks

export const selectBarKicks = (bar: number) => (state: RootState) => state.sheet.kicks[bar];
