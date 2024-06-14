import React, {ReactNode, FC} from 'react';
import classNames from "classnames";
import Way from '../assets/Way.svg'
import AppProto from '../assets/AppProto.svg'

interface AppViewProps {
    children?: ReactNode,
    className?: string,
}

export const AppView: FC<AppViewProps> = ({
                                              children,
                                              className,
                                              ...props
                                          }) => {
    return (
        <AppProto className={classNames(className)}/>
    );
};
