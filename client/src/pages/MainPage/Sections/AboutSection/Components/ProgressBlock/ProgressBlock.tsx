import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import {StatsView} from "@/widgets/shows/Stats/ui/StatsView";
import Button, {ButtonVariant} from "@/shared/ui/Button/Button";
import OpenIcon from "@/shared/assets/openIcon.svg";
import {Header} from './Header';
import {Description} from "./Description";

interface ProgressBlockProps {
    children?: ReactNode,
}

export const ProgressBlock: FC<ProgressBlockProps> = ({
                                                          children,
                                                          ...props
                                                      }) => {
    return (
        <div className={classNames(
            'h-fit flex flex-col gap-6 bg-dark-secondary py-8 border border-solid border-neutral rounded-lg mb-12',
            'md:mb-0',
        )}>
            <Header />
            <div className={classNames('relative w-full')}>
                <StatsView/>
            </div>
            <Description />
        </div>
    );
};
