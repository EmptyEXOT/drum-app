import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
import {TypoAlign, TypoWeight} from "@/shared/ui/Typo/types";
import {ButtonVariant, Button} from "@/shared/ui/Button/Button";
import OpenIcon from "@/shared/assets/openIcon.svg";
import cls from './InvitationSection.module.scss'
import {Shine} from "@/shared/ui/Shine/Shine";
import {Section} from "@/shared/ui/Section/Section";

interface InvitationSectionProps {
    children?: ReactNode,
}

export const InvitationSection: FC<InvitationSectionProps> = ({
                                                                  children,
                                                                  ...props
                                                              }) => {
    return (
        <Section className={classNames(
            'min-h-0 gap-8 pt-8 pb-12',
            'md:pt-16'
        )}>
            <Typo.H1 weight={TypoWeight.Bold} align={TypoAlign.Center}>
                Get Fit with Drumming Exercises
            </Typo.H1>
            <Typo.P align={TypoAlign.Center} variant={TypoVariant.SecondaryLight}>
                Discover the power of drumming exercises and improve your skills right now.
            </Typo.P>
            <div className={classNames('flex gap-5 w-full justify-center flex-wrap')}>
                <Button
                    variant={ButtonVariant.Primary}
                    border
                    className={classNames('py-2 px-4')}
                >
                    Start Now
                </Button>
            </div>
            <div className={classNames('relative z-0 w-[100vw] h-6 opacity-20')}>
                <Shine className={classNames(cls.shine, 'w-[95vh] h-[20vh] left-[50%] top-[30%] absolute z-0')}/>
            </div>
        </Section>
    );
};
