import React, {ReactNode, FC} from 'react';
import classNames from "classnames";
import {Typo} from "@/shared/ui/Typo/Typo";
import {TypoAlign} from "@/shared/ui/Typo/types";
import QuartNote from "@/shared/notes/Quarter.png";

interface SheetProps {
    className?: string
    children?: ReactNode,
    author: string,
    title: string,
}

export const Sheet: FC<SheetProps> = ({
                                          children,
                                          className,
                                          author,
                                          title,
                                          ...props
                                      }) => {
    return (
        <div className={classNames(className)}>
            <div>
                <div><Typo.H2 align={TypoAlign.Center}>{title}</Typo.H2></div>
                <div><Typo.H3 align={TypoAlign.End}>{author}</Typo.H3></div>
                <div className={classNames('flex w-80 gap-3 justify-start')}>
                    <img src={QuartNote} width={10} alt=""/>
                    <Typo.H3 align={TypoAlign.End} className={classNames('w-fit')}>= 140</Typo.H3>
                </div>
            </div>
            {children}
        </div>
    );
};
