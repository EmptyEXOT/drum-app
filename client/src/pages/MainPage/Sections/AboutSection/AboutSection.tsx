import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import {TypoAlign, TypoWeight} from "@/shared/ui/Typo/types";
import {Typo} from '@/shared/ui/Typo/Typo';
import {Section} from "@/shared/ui/Section/Section";
import {ProgressBlock} from "./Components/ProgressBlock/ProgressBlock";
import {CommunityBlock} from "./Components/CommunityBlock/CommunityBlock";
import {OverviewBlock} from "./Components/OverviewBlock/OverviewBlock";

interface AboutSectionProps {
    children?: ReactNode,
}

export const AboutSection: FC<AboutSectionProps> = ({
                                                        children,
                                                        ...props
                                                    }) => {
    return (
        <Section className={classNames(
            'gap-12 pt-8 pb-32',
            'md:pt-24 md:gap-20'
        )}>
            <Typo.H2
                weight={TypoWeight.Bold}
                align={TypoAlign.Center}
            >
                One app for practicing drums
            </Typo.H2>
            <div className={classNames(
                'contents',
                'md:flex md:gap-14',
                'lg:gap-24'
            )}>
                <OverviewBlock />
                <div className={classNames(
                    'contents',
                    'md:flex md:flex-col md:gap-12 md:basis-1/2'
                )}>
                    <ProgressBlock />
                    <CommunityBlock />
                </div>
            </div>
        </Section>
    );
};
