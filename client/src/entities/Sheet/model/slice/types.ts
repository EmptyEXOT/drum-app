import {NoteBase} from "@/entities/Note/model/slice/types";
import {NoteType} from "@/pages/AlphabetAppPage/types";
import {IKick} from "@/pages/AlphabetAppPage/Kick";

export interface SheetModel {
    signature: [number, number],
    author: string,
    title: string,
    bars: Note[][],
    kicks: IKick[][],
}

export interface Note {
    base: NoteBase,
    type: NoteType,
}