import React, {FC, memo, ReactNode, useEffect} from 'react';
import {Note, NoteType} from "@/pages/AlphabetAppPage/types";
import classNames from "classnames";
import QuartNote from "@/shared/notes/Quarter.png";
import PauseQuart from "@/shared/notes/PauseQuart.png";
import {IKick, Kick} from "@/pages/AlphabetAppPage/Kick";
import {useAppSelector} from "@/shared/store/hooks";
import {selectBarKicks} from "@/entities/Sheet/model/selectors/kicks.selector";

export enum BarBorder {
    Start = 'border-l border-solid border-l-neutral-400',
    End = 'border-r border-solid border-r-neutral-400',
    Both = 'border-r border-solid border-r-neutral-400 border-l border-l-neutral-400',
}

interface BarProps {
    children?: ReactNode,
    notes: Note[],
    border: BarBorder,
    isActive: boolean,
    pos: number,
}

export const Bar: FC<BarProps> = memo(({
                                           children,
                                           notes,
                                           border = BarBorder.End,
                                           pos,
                                           isActive,
                                           ...props
                                       }) => {
    const kicks = useAppSelector(selectBarKicks(pos))

    return (
        <div
            className={classNames(
                'my-4 flex flex-col min-w-64 h-16 justify-center relative',
                isActive && 'bg-neutral-800 opacity-75',
                border
            )}>
            {notes.map((note, idx) =>
                <div
                    style={{
                        left: `${idx * note.base + 16}px`
                    }}
                    className={classNames(`absolute top-2`)}>
                    {note.type === NoteType.Note ? <img src={QuartNote} width={10} alt=""/> :
                        <img src={PauseQuart} width={10} alt=""/>}
                </div>
            )}
            {kicks.map(kick =>
                <Kick pos={kick.pos}/>
            )}
            <div className={classNames('w-full h-0.5 bg-neutral-400')}>
            </div>
        </div>
    );
});
