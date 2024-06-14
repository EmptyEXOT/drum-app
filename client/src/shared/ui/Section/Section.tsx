import React, {ReactNode, FC} from 'react';
import classNames from "classnames";

interface SectionProps {
    children?: ReactNode,
    className?: string
}

export const Section: FC<SectionProps> = ({
                                              children,
                                              className,
                                              ...props
                                          }) => {
    return (
        <div className={classNames(
            'max-w-screen w-full bg-dark-primary',
            'flex flex-col justify-between px-4 items-center',
            'md:container md:mx-auto md:min-h-0 md:w-auto md:px-8',
            'lg:px-10',
            className
        )}>
            {children}
        </div>
    );
};
