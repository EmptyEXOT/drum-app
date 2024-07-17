import React, {ReactNode, FC} from 'react';
import classNames from "classnames";

interface StaffProps {
    children?: ReactNode,
}

export const Staff: FC<StaffProps> = ({
                                          children,
                                          ...props
                                      }) => {
    return (
        <div className={classNames('w-full h-0.5 bg-neutral-500')} />
    );
};
