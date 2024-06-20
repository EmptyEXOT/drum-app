import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import {Shine} from "@/shared/ui/Shine/Shine";
import DrumImage from "../../assets/DrumDark.png";
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
import {ButtonVariant, Button} from "@/shared/ui/Button/Button";
import {TypoAlign, TypoWeight} from "@/shared/ui/Typo/types";
import {Section} from "@/shared/ui/Section/Section";
import {Img} from "@/shared/ui/Image/Img";

interface HeaderSectionProps {
    children?: ReactNode,
}

export const HeaderSection: FC<HeaderSectionProps> = ({
                                                          children,
                                                          ...props
                                                      }) => {
    return (
        <Section className={classNames(
            'gap-2 pt-24 pb-32 min-h-screen',
            'md:pt-48 md:flex-row md:justify-center md:min-h-0 md:h-fit md:gap-5',
            'lg:max-h-screen',
        )}>
            {/* contents div to change layout sm-md-* */}
            <div className={classNames(
                'contents',
                'md:flex-initial md:w-[50%] md:flex md:flex-col md:gap-12 md:items-center',
            )}>
                <div className={classNames(
                    'contents',
                    'md:flex flex-col md:gap-5'
                )}>
                    {/* AppView name and description */}
                    <div className={classNames(
                        'flex flex-col gap-4 items-center order-1',
                        'md:max-w-[80%]',
                    )}>
                        <Typo.H1
                            align={TypoAlign.Center}
                            variant={TypoVariant.PrimaryLight}
                            weight={TypoWeight.Bold}
                            className={classNames(
                                '',
                            )}
                        >
                            App Name
                        </Typo.H1>
                        <Typo.H3
                            align={TypoAlign.Center}
                            variant={TypoVariant.SecondaryLight}
                        >
                            A drumming exercise app designed to help you improve your skills and have hours of fun!
                        </Typo.H3>
                    </div>

                    {/* Try now button */}
                    <div className={classNames(
                        'contents',
                        'md:w-[80%] md:flex md:justify-center order-3'
                    )}>
                        <Button
                            variant={ButtonVariant.Primary}
                            className={classNames(
                                'px-4 py-2 w-fit order-3',
                            )}
                            border
                        >
                            Try Now
                        </Button>
                    </div>
                </div>
            </div>

            {/* Img */}
            <div className={classNames(
                'relative order-2',
                'md:order-first md:basis-5/12 md:flex md:justify-end',
            )}>
                <Img src={DrumImage} alt={'Drum'} className={classNames(
                    '',
                    '',
                    'lg:w-[75%]',
                    ''
                )}/>
                {/*<div className={classNames(*/}
                {/*    'z-30 h-[50vh]',*/}
                {/*    'md:h-auto',*/}
                {/*)}>*/}
                {/*    <img className={classNames(*/}
                {/*        'relative left-[50%] -translate-x-[50%] object-contain h-full z-30'*/}
                {/*    )} src={DrumImage} alt=""/>*/}
                {/*</div>*/}
                <Shine className={classNames(
                    'left-0 top-0 right-0 bottom-0 absolute opacity-20',
                )}/>
            </div>
        </Section>
    );
};
