import {RootState} from "@/shared/store/store";

export const selectCaret = (state: RootState) => state.track.caret;