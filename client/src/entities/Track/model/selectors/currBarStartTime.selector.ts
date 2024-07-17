import {RootState} from "@/shared/store/store";

export const selectCurrBarStartTime = (state: RootState) => state.track.currBarStartTime;