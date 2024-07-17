import {getTransport, Player} from "tone";
import open from '../../shared/sounds/open.wav'
import closed from '../../shared/sounds/closed.wav'
import Chance from 'chance'
import {Note} from "@/entities/Sheet/model/slice/types";
import {Seconds} from "tone/build/esm/core/type/Units";

export const metronomePlayer = new Player(closed).toDestination();
export const notePlayer = new Player(open).toDestination();

// getTransport().scheduleRepeat((time) => {
//     metronomePlayer.start(time)
// }, '4n')

let evtId: number;

export const start = (cb: (time: Seconds) => void) => {
    evtId = getTransport().scheduleRepeat(cb, '4n')
    getTransport().start()
}

export const stop = () => {
    getTransport().clear(evtId)
}

export const mute = () => {
    metronomePlayer.mute = true;
}

export const unmute = () => {
    metronomePlayer.mute = false;
}
