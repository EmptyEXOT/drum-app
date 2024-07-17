import {SheetModel} from "@/entities/Sheet/model/slice/types";
import {TrackModel} from "@/entities/Track/model/slice/types";

export interface StateSchema {
    sheet: SheetModel,
    track: TrackModel,
}