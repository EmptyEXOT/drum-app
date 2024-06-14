import React, {ReactNode, FC} from 'react';
import classNames from "classnames";
import Way from '../assets/Way.svg'

interface WayViewProps {
    children?: ReactNode,
    className?: string,
}

export const WayView: FC<WayViewProps> = ({
                                              children,
                                              className,
                                              ...props
                                          }) => {
    return (
        <Way className={classNames(className)}/>
    );
};
