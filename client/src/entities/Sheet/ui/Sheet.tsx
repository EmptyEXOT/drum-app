import React, {FC, ReactNode, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {selectBars} from "@/entities/Sheet/model/selectors/barsSelector";
import {sheetActions} from "@/entities/Sheet/model/slice/Sheet.slice";
import {NoteBase} from "@/entities/Note/model/slice/types";
import {Bar} from "@/shared/notes/Bar/ui/Bar";
import classNames from "classnames";

interface SheetProps {
    children?: ReactNode,
}

export const Sheet: FC<SheetProps> = ({
                                          children,
                                          ...props
                                      }) => {
    const bars = useAppSelector(selectBars);
    const dispatch = useAppDispatch()

    useEffect(() => {
        console.log('effect')
        addBar()
        addBar()
    }, []);

    const addBar = () => {
        dispatch(sheetActions.pushBar({
            notes: [
                {base: NoteBase.Quart, pos: '2C'},
                {base: NoteBase.Quart, pos: '2C'},
                {base: NoteBase.Quart, pos: '2C'},
                {base: NoteBase.Quart, pos: '2C'},
            ]
        }))
    }

    return (
        <div>
            <div className={classNames('flex')}>
                <div style={{
                    width: '16px',
                    height: '40px',
                    backgroundColor: 'blue'
                }}></div>
                <div style={{
                    width: '384px',
                    height: '40px',
                    backgroundColor: 'red'
                }}></div>
                <div style={{
                    width: '16px',
                    height: '40px',
                    backgroundColor: 'blue'
                }}></div>
            </div>

            <div className={classNames('flex h-12')}>
                {bars.map((bar, idx) => <Bar key={idx}></Bar>)}
            </div>
        </div>
    );
};
