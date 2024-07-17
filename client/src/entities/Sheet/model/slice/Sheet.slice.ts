import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Note, SheetModel} from "@/entities/Sheet/model/slice/types";
import Chance from "chance";
import {NoteType} from "@/pages/AlphabetAppPage/types";
import {NoteBase} from "@/entities/Note/model/slice/types";

const initialState: SheetModel = {
    signature: [4, 4],
    author: 'Unknown Author',
    title: 'Unknown Sheet',
    bars: [],
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
                res.push([])
                res[i].push(
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
                    }
                )
            }
            state.bars = res;
            // state.bars.push
        }
    }
})

export const {reducer: sheetReducer} = sheetSlice
export const {actions: sheetActions} = sheetSlice
