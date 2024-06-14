import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import Button, {ButtonVariant} from "@/shared/ui/Button/Button";
import OpenIcon from "@/shared/assets/openIcon.svg";
import {Header} from './Header';
import {Description} from './Description';
import {AppView} from "@/widgets/shows/App/ui/AppView";
import {WayView} from "@/widgets/shows/App/ui/WayView";

interface OverviewBlockProps {
    children?: ReactNode,
}

export const OverviewBlock: FC<OverviewBlockProps> = ({
                                                          children,
                                                          ...props
                                                      }) => {
    return (
        <div className={classNames(
            'flex flex-col gap-6 mb-12',
            'md:basis-7/12 md:mb-0',
        )}>
            <Header />
            <div className={classNames('relative')}>
                <WayView className={classNames('w-full')}/>
            </div>
            <div className={classNames('relative')}>
                <AppView className={classNames('w-full')}/>
            </div>
            <Description />

            {/*TODO move to features slice*/}
            <div className={classNames('flex justify-center')}>
                <Button
                    variant={ButtonVariant.Primary}
                    className={classNames(
                        'py-2 px-4 flex items-center justify-center',
                        'md:w-full md:px-0 md:justify-start',
                    )}>
                    Get Started
                    <OpenIcon/>
                </Button>
            </div>
        </div>
    );
};
