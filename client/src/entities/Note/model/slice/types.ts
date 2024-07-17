export enum NoteBase {
    Full = 256,
    Half = 128,
    Quart = 64,
    Eight = 32,
    Sixteen = 16,
    ThirtyTwo = 8,
    SixtyFour = 4,
    OneHundredAndTwentyEight = 2,
    TwoHundredAndFiftySix = 1,
}

export type NotePos = `${0|1|2|3|4|5|6|7|8}${'C'|'D'|'E'|'F'|'G'|'A'|'B'}`

export interface NoteModel {
    base: NoteBase,
    pos: NotePos,
}