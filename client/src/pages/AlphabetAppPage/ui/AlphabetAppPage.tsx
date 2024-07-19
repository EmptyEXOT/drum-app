import React, {FC, ReactNode, useEffect, useState} from 'react';
import {useSidebarDispatch} from "@/widgets/Sidebar/hooks/useSidebarDispatch";
import {SidebarActionType} from "@/widgets/Sidebar/types";
import {Modules} from "@/widgets/Module/types/Modules";
import classNames from "classnames";
import {Sheet} from "@/pages/AlphabetAppPage/Sheet";
import {Bar, BarBorder} from "@/pages/AlphabetAppPage/Bar";
import {Note} from "@/pages/AlphabetAppPage/types";
import {InfoBar} from "@/pages/InfoBar";
import {sheetActions} from "@/entities/Sheet/model/slice/Sheet.slice";
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {selectBars} from "@/entities/Sheet/model/selectors/barsSelector";
import {Button, ButtonVariant} from "@/shared/ui/Button/Button";
import {Typo} from "@/shared/ui/Typo/Typo";
import {IKick} from "@/pages/AlphabetAppPage/Kick";
import {selectCaret} from "@/entities/Track/model/selectors/caret.selector";
import {selectCurrBarStartTime} from "@/entities/Track/model/selectors/currBarStartTime.selector";
import {getTransport} from "tone";
import {trackActions} from "@/entities/Track/model/slice/Track.slice";

interface AlphabetAppPageProps {
    children?: ReactNode,
}

const barByCaret = (caretPos: number): number => {
    if (Math.floor((caretPos - 1) / 4) < 0) return 0;
    return Math.floor((caretPos - 1) / 4);
}

const isCurrBarByIdx = (caretPos: number, idx: number): boolean => {
    return Math.floor((caretPos - 1) / 4) === idx
        || (Math.floor((caretPos - 1) / 4) < 0 && idx === 0)
}

const AlphabetAppPage: FC<AlphabetAppPageProps> = ({
                                                       children,
                                                       ...props
                                                   }) => {
    const dispatchSidebar = useSidebarDispatch();
    const dispatch = useAppDispatch();
    const bars: Note[][] = useAppSelector(selectBars);
    const caret = useAppSelector(selectCaret);
    const currBarStartTime = useAppSelector(selectCurrBarStartTime);

    useEffect(() => {
        dispatchSidebar({
            type: SidebarActionType.SetModules,
            payload: {modules: [Modules.Controls, Modules.Metronome, Modules.Alphabet]}
        });
        dispatch(sheetActions.generate({count: 16}))
    }, []);

    return (
        <div className={classNames('pt-24 mx-auto container px-10')}>
            <Sheet
                className={classNames('bg-primary-dark px-4 pt-8 border border-neutral-500 border-solid min-h-screen')}
                title={'The Language Of Drumming'}
                author={'Benny Greb'}
            >
                <Button
                    variant={ButtonVariant.Primary}
                    className={classNames('p-3')}
                    onClick={() => {
                        const time = Date.now()
                        console.log(`onClick handler: ${time}`)
                        dispatch(sheetActions.addKick({
                            bar: barByCaret(caret.note),
                            pos: (time - currBarStartTime) / (((60 / getTransport().bpm.value) * 1000 * 4) / 256)
                        }))
                    }}
                >
                    <Typo.H3>Kick</Typo.H3>
                </Button>
                <div><Typo.H3>{caret.bar}:{caret.note}</Typo.H3></div>
                <div className={classNames('mx-auto flex flex-wrap w-fit justify-start')}>
                    <InfoBar/>
                    {bars.map(
                        (barNotes, idx) =>
                            <Bar
                                pos={idx}
                                isActive={isCurrBarByIdx(caret.note, idx)}
                                border={!idx ? BarBorder.End : BarBorder.Both}
                                notes={barNotes}
                                key={idx}
                            />
                    )}
                </div>
            </Sheet>
        </div>
    );
};

export default AlphabetAppPage