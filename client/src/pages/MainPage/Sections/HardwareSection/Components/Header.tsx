import React, {ReactNode, FC} from 'react';
import {Typo} from "@/shared/ui/Typo/Typo";
import {TypoWeight} from "@/shared/ui/Typo/types";
import classNames from "classnames";

interface HeaderProps {
    children?: ReactNode,
}

export const Header: FC<HeaderProps> = ({
                                            children,
                                            ...props
                                        }) => {
    return (
        <>
            <Typo.H2 weight={TypoWeight.Bold}
                     className={classNames(
                         'order-2',
                     )}
            >Experience the Future of Drumming with Our Device</Typo.H2>
        </>
    );
};
