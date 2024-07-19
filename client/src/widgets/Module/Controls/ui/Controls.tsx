import React, {FC, ReactNode, useState} from 'react';
import {Button, ButtonVariant} from "@/shared/ui/Button/Button";
import {Typo} from "@/shared/ui/Typo/Typo";
import {metronomePlayer, notePlayer} from "@/app/metronome";
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {selectBars} from "@/entities/Sheet/model/selectors/barsSelector";
import {Note} from "@/entities/Sheet/model/slice/types";
import {NoteType} from "@/pages/AlphabetAppPage/types";
import {useSidebarDispatch} from "@/widgets/Sidebar/hooks/useSidebarDispatch";
import {trackActions} from "@/entities/Track/model/slice/Track.slice";
import {selectCaret} from "@/entities/Track/model/selectors/caret.selector";
import {getTransport} from "tone";
import {SidebarActionType} from "@/widgets/Sidebar/types";
import {sheetActions} from "@/entities/Sheet/model/slice/Sheet.slice";

export interface ControlsProps {
    children?: ReactNode,
}

export type ControlsComponent = FC<ControlsProps>;


export const Controls: ControlsComponent = ({
                                                children,
                                                ...props
                                            }) => {
    const [isPlay, setIsPlay] = useState<boolean>(false)
    const bars: Note[][] = useAppSelector(selectBars);
    const sidebarDispatcher = useSidebarDispatch();
    const dispatch = useAppDispatch()

    const onPlayClick = () => {
        setIsPlay(prevState => !prevState);
        dispatch(sheetActions.clearKicks(16))
        let id = 0;
        let caret = 0;
        dispatch(trackActions.setCaretPos(0));
        if (isPlay) {
            dispatch(trackActions.stop(id));
        } else {
            id = getTransport().scheduleRepeat((time) => {
                metronomePlayer.start(time)
                let bar = Math.floor(caret / 4);
                const note = caret % 4;
                caret++
                dispatch(trackActions.goNextNote())
                if (caret > 64) {
                    dispatch(trackActions.stop(id))
                    setIsPlay(false);
                    caret = 0
                    dispatch(trackActions.setCaretPos(0));
                    dispatch(sheetActions.clearKicks(16))
                    return
                }
                bars[bar][note].type === NoteType.Note && notePlayer.start(time);
            }, '4n')
            dispatch(trackActions.start())
            sidebarDispatcher({type: SidebarActionType.Close})
        }
    }

    return (
        <div>
            <div>
                <Typo.H2>Controls</Typo.H2>
                <Button
                    variant={ButtonVariant.Primary}
                    onClick={onPlayClick}
                >
                    {isPlay ? <Typo.H4>Stop</Typo.H4> : <Typo.H4>Play</Typo.H4>}
                </Button>
            </div>
        </div>
    );
};
