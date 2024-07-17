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
        const startTime = Date.now();
        setIsPlay(prevState => !prevState);
        let id = 0;
        let caret = 0;
        dispatch(trackActions.setCaretPos(0));
        if (isPlay) {
            dispatch(trackActions.stop(id));
        } else {
            dispatch(trackActions.setBpm(120))
            // init repeat остается преждним, стейт каретки внутри него не обновляется.
            id = getTransport().scheduleRepeat((time) => {
                //20 - 532 - 1044
                metronomePlayer.start(time)
                // console.log(Date.now() - startTime)
                const bar = Math.floor(caret / 4);
                const note = caret % 4;
                caret++
                dispatch(trackActions.goNextNote())
                bars[bar][note].type === NoteType.Note && notePlayer.start(time);
            }, '4n')
            dispatch(trackActions.start())
            sidebarDispatcher({type: SidebarActionType.Close})
        }
    }

    // const onPlayClick = () => {
    //     setIsPlay(prevState => !prevState);
    //     console.log(isPlay)
    //     dispatch(caretActions.setPos(0))
    //     let currNote = 0;
    //     if (isPlay) {
    //         stop()
    //     } else {
    //         start((time) => {
    //             // console.log(time)
    //             // metronomePlayer.start(time)
    //             // const bar = Math.floor(currNote/4);
    //             // const note = currNote % 4;
    //             // currNote += 1;
    //             // bars[bar][note].type === NoteType.Note && notePlayer.start(time);
    //             console.log(caret)
    //             metronomePlayer.start(time)
    //             const bar = Math.floor(caret.pos/4);
    //             const note = caret.pos % 4;
    //             dispatch(caretActions.goNext())
    //             bars[bar][note].type === NoteType.Note && notePlayer.start(time);
    //         })
    //         sidebarDispatcher({type: SidebarActionType.Close})
    //     }
    // }

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
