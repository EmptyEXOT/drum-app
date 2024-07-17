import {NoteBase} from "@/entities/Note/model/slice/types";
import {NoteType} from "@/pages/AlphabetAppPage/types";

export interface SheetModel {
    signature: [number, number],
    author: string,
    title: string,
    bars: Note[][]
}

export interface Note {
    base: NoteBase,
    type: NoteType,
}