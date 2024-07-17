import React, {ReactNode, FC} from 'react';
import classNames from "classnames";
import { Staff } from '../../Staff/ui/Staff';

interface BarProps {
    children?: ReactNode,
}

export const Bar: FC<BarProps> = ({
                                      children,
                                      ...props
                                  }) => {
    return (
        <div className={classNames('border-r-2 border-l-2 border-neutral-500 border-solid w-full flex flex-col justify-around')}>
            <Staff />
            <Staff />
            <Staff />
            <Staff />
            <Staff />
        </div>
    );
};
