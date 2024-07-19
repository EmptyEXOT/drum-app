import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TrackModel} from "@/entities/Track/model/slice/types";
import {getTransport} from "tone";

const initialState: TrackModel = {
    caret: {
        note: 0,
        bar: 0,
    },
    repeatId: 0,
    startTime: 0,
    currBarStartTime: 0,
}

export const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        stop: (state, action: PayloadAction<number>) => {
            getTransport().stop();
            getTransport().clear(action.payload)
        },
        start: (state) => {
            getTransport().start()
            state.startTime = Date.now();
        },
        setCaretPos: (state, action: PayloadAction<number>) => {
            state.caret.note = action.payload
        },
        goNextNote: (state) => {
            const now = Date.now()
            state.caret.note += 1;
            const newBar = Math.floor((state.caret.note-1) / 4)
            if (state.caret.bar < newBar) {
                state.currBarStartTime = now;
            }
            state.caret.bar = newBar
        },
        setBpm: (state, action: PayloadAction<number>) => {
            getTransport().bpm.value = action.payload
        },
        setCurrBarStartTime: (state, action: PayloadAction<number>) => {
            state.currBarStartTime = action.payload;
        }
    }
})

export const {reducer: trackReducer} = trackSlice;
export const {actions: trackActions} = trackSlice;