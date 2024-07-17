import {NoteBase} from "@/entities/Note/model/slice/types";

export interface IBar {
    notes: Note[]
}

export enum NoteType {
    Note = 'Note',
    Pause = 'Pause',
}

export interface Note {
    base: NoteBase,
    type: NoteType,
}