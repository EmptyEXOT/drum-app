import {NoteBase, NoteModel} from "@/entities/Note/model/slice/types";
import Chance from "chance";

export const generateRandomNote = (limits: {octave?: 0|1|2|3|4|5|6|7|8, note?: 'C'|'D'|'E'|'F'|'G'|'A'|'B', base?: NoteBase}): NoteModel => {
    const posOctave: 0|1|2|3|4|5|6|7|8 = limits.octave || new Chance().integer({min: 0, max: 8}) as 0|1|2|3|4|5|6|7|8
    let posNote: 'C'|'D'|'E'|'F'|'G'|'A'|'B';
    if (limits.note) {
        posNote = limits.note
    } else {
        const lettersArray = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
        const letterNum = new Chance().integer({min: 0, max: 6})
        posNote = lettersArray[letterNum] as 'C'|'D'|'E'|'F'|'G'|'A'|'B';
    }

    let noteBase: NoteBase;
    if (limits.base) {
         noteBase = limits.base
    } else {
        const basesArray: Array<NoteBase> = [NoteBase.Full, NoteBase.Half, NoteBase.Quart, NoteBase.Eight, NoteBase.Sixteen, NoteBase.ThirtyTwo, NoteBase.SixtyFour, NoteBase.OneHundredAndTwentyEight, NoteBase.TwoHundredAndFiftySix]
        const baseNum = new Chance().integer({min: 0, max: 8})
        noteBase = basesArray[baseNum];
    }

    return {
        pos: `${posOctave}${posNote}`,
        base: noteBase
    }
}