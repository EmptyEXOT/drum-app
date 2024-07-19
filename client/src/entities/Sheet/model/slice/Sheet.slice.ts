import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Note, SheetModel} from "@/entities/Sheet/model/slice/types";
import Chance from "chance";
import {NoteType} from "@/pages/AlphabetAppPage/types";
import {NoteBase} from "@/entities/Note/model/slice/types";
import {IKick} from "@/pages/AlphabetAppPage/Kick";

const initialState: SheetModel = {
    signature: [4, 4],
    author: 'Unknown Author',
    title: 'Unknown Sheet',
    bars: [],
    kicks: [],
}

export const sheetSlice = createSlice({
    name: 'sheet',
    initialState,
    reducers: {
        setSignature: (state, action: PayloadAction<[number, number]>) => {
            state.signature = action.payload
        },
        pushBar: (state, action: PayloadAction<any>) => {
            state.bars.push(action.payload)
        },
        generate: (state, action: PayloadAction<{
            count: number,
        }>) => {
            const generator = new Chance();
            let res: Note[][] = []
            for (let i = 0; i < action.payload.count; i++) {
                res.push([
                    {
                        type: generator.bool() ? NoteType.Note : NoteType.Pause,
                        base: NoteBase.Quart,
                    },
                    {
                        type: generator.bool() ? NoteType.Note : NoteType.Pause,
                        base: NoteBase.Quart,
                    },
                    {
                        type: generator.bool() ? NoteType.Note : NoteType.Pause,
                        base: NoteBase.Quart,
                    },
                    {
                        type: generator.bool() ? NoteType.Note : NoteType.Pause,
                        base: NoteBase.Quart,
                    }]
                )
                state.kicks.push([])
            }
            state.bars = res;
        },
        addKick: (state, action: PayloadAction<{
            bar: number,
            pos: number,
        }>) => {
            state.kicks[action.payload.bar].push({
                pos: action.payload.pos,
            } satisfies IKick)
        },
        clearKicks: (state, action: PayloadAction<number>) => {
            state.kicks = [];
            for (let i = 0; i < action.payload; i++) {
                state.kicks.push([])
            }
        }
    }
})

export const {reducer: sheetReducer} = sheetSlice
export const {actions: sheetActions} = sheetSlice
