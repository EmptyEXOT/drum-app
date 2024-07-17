import React, {ReactNode, FC} from 'react';
import classNames from "classnames";
import {Typo} from "@/shared/ui/Typo/Typo";
import {NoteType} from "@/pages/AlphabetAppPage/types";
import QuartNote from "@/shared/notes/Quarter.png";
import PauseQuart from "@/shared/notes/PauseQuart.png";

interface InfoBarProps {
    children?: ReactNode,
}

export const InfoBar: FC<InfoBarProps> = ({
                                              children,
                                              ...props
                                          }) => {
    return (
        <div
            className={classNames(
                'my-4 flex flex-col min-w-16 h-16 border-l-2 border-solid border-l-neutral-400 justify-center relative',
            )}>
            <div className={classNames('w-full h-0.5 bg-neutral-400 relative')}>
                <div className={classNames('absolute h-6 w-1 -top-3 left-2 bg-contrast-light')}></div>
                <div className={classNames('absolute h-6 w-1 -top-3 left-4 bg-contrast-light')}></div>
                <div>
                    <div className={classNames('absolute -bottom-1 left-9')}><Typo.H3>4</Typo.H3></div>
                    <div className={classNames('absolute -top-1 left-9')}><Typo.H3>4</Typo.H3></div>
                </div>
            </div>
        </div>
    );
};
