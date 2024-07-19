import React, {ReactNode, FC} from 'react';
import classNames from "classnames";

interface KickProps {
    className?: string,
    pos: number,
    children?: ReactNode,
}

export interface IKick {
    pos: number,
}

export const Kick: FC<KickProps> = ({
                                        children,
                                        pos,
                                        ...props
                                    }) => {
    return (
        <div
        style={{
            left: `${pos}px`
        }}
            className={classNames('w-2 h-2 bg-red-light absolute top-5 rounded-3xl')}
        />
    );
};
