import React, {ReactNode, FC} from 'react';
import Stats from '../assets/Stats.svg';
import classNames from "classnames";

interface StatsViewProps {
    children?: ReactNode,
    className?: string,
}

export const StatsView: FC<StatsViewProps> = ({
                                              children,
                                              className,
                                              ...props
                                          }) => {
    return (
        <Stats className={classNames(className)} />
    );
};
