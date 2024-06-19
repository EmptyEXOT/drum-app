import React, {ReactNode, FC} from 'react';
import classNames from "classnames";
import ShieldIcon from "assets/ShieldIcon.svg";
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";

interface BlockProps {
    children?: ReactNode,
    icon: ReactNode,
    header: string,
    description: string,
}

export const Block: FC<BlockProps> = ({
                                          children,
                                          ...props
                                      }) => {
    return (
        <div className={classNames('flex flex-col gap-3')}>
            <div className={classNames('flex gap-3 items-center')}>
                {props.icon}
                <Typo.H3>{props.header}</Typo.H3>
            </div>
            <div>
                <Typo.P variant={TypoVariant.SecondaryLight}>
                    {props.description}
                </Typo.P>
            </div>
        </div>
    );
};
