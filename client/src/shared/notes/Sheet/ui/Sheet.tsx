import React, {ReactNode, FC} from 'react';
import classNames from "classnames";
import {Typo} from "@/shared/ui/Typo/Typo";
import {TypoAlign} from "@/shared/ui/Typo/types";
import QuartNote from "@/shared/notes/Quarter.png";
import {Bar} from "../../Bar/ui/Bar";

interface SheetProps {
    children?: ReactNode,
}

export const Sheet: FC<SheetProps> = ({
                                          children,
                                          ...props
                                      }) => {
    return (
        <div className={classNames('bg-primary-dark px-4 pt-8 border border-neutral-500 border-solid h-fit')}>
            <div>
                <div><Typo.H2 align={TypoAlign.Center}>The Language Of Drumming</Typo.H2></div>
                <div><Typo.H3 align={TypoAlign.End}>Benny Greb</Typo.H3></div>
                <div className={classNames('flex w-80 gap-3 justify-start')}>
                    <img src={QuartNote} width={10} alt=""/>
                    <Typo.H3 align={TypoAlign.End} className={classNames('w-fit')}>= 140</Typo.H3>
                </div>
            </div>
            <div className={classNames('pt-16 flex flex-col justify-start gap-10')}>
                <div className={classNames('flex h-12')}>
                    <Bar />
                    <Bar />
                    <Bar />
                </div>
                <div className={classNames('flex h-12')}>
                    <Bar />
                    <Bar />
                    <Bar />
                </div>
            </div>

        </div>
    );
};
