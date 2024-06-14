import React, {ReactNode, FC} from 'react';
import classNames from "classnames";
import cls from './Shine.module.scss'

interface ShineProps {
    children?: ReactNode,
    className?: string,
}

export const Shine: FC<ShineProps> = ({
                                          children,
                                          className,
                                          ...props
                                      }) => {
    return (
        <div
            className={classNames(
                cls.shine,
                className
            )}>
        </div>
    );
};
