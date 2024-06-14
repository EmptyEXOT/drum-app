import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
import {TypoWeight} from "@/shared/ui/Typo/types";
import cls from "@/pages/MainPage/Sections/AboutSection/AboutSection.module.scss";
import BassDrumIcon from '@/shared/assets/BassDrumIcon.png'
import EasyIcon from '@/shared/assets/EasyIcon.png'
import MetronomeIcon from '@/shared/assets/MetronomeIcon.png'
import ShoppingCartIcon from '@/shared/assets/ShoppingCartIcon.png'
import Button, {ButtonVariant} from "@/shared/ui/Button/Button";
import {Section} from "@/shared/ui/Section/Section";
import {Header} from './Components/Header'
import {Description} from './Components/Description'

interface HardwareSectionProps {
    children?: ReactNode,
}

export const HardwareSection: FC<HardwareSectionProps> = ({
                                                              children,
                                                              ...props
                                                          }) => {
    return (
        <Section
            className={classNames(
                'gap-8 pt-8 pb-32',
                'md:pt-12 md:flex-row'
            )}
        >
            <div className={classNames(
                'contents',
                'md:flex md:flex-col md:basis-1/2 md:gap-8'
            )}>
                <Header />
                <Description />
                <div className={classNames('flex flex-col gap-6 order-5 justify-start w-full')}>
                    <div className={classNames('flex gap-2 items-center w-full')}>
                        <img src={EasyIcon} alt="" className={classNames('contain-content h-[48px] w-[48px]')}/>
                        <Typo.P
                            variant={TypoVariant.SecondaryLight}
                            className={classNames('md:text-xl')}
                        >Enhance your drumming technique with ease.</Typo.P>
                    </div>
                    <div className={classNames('flex gap-2 items-center w-full')}>
                        <img src={MetronomeIcon} alt="" className={classNames('contain-content h-[48px] w-[48px]')}/>
                        <Typo.P variant={TypoVariant.SecondaryLight} className={classNames('md:text-xl')}>Improve your rhythm and timing with interactive exercises.</Typo.P>
                    </div>
                    <div className={classNames('flex gap-2 items-center w-full')}>
                        <img src={BassDrumIcon} alt="" className={classNames('contain-content h-[48px] w-[48px]')}/>
                        <Typo.P variant={TypoVariant.SecondaryLight} className={classNames('md:text-xl')}>Master complex drum patterns with our intuitive device.</Typo.P>
                    </div>
                </div>

                <div className={classNames('flex gap-5 w-full justify-items-start flex-wrap order-5 pt-3')}>
                    <Button
                        variant={ButtonVariant.Primary}
                        className={classNames('py-2 px-4')}
                    >
                        Learn More
                    </Button>
                    <Button
                        variant={ButtonVariant.Primary}
                        className={classNames('py-2 px-4 flex items-center gap-2')}
                    >
                        Offers
                        <img src={ShoppingCartIcon} alt="" className={classNames('contain-content h-[28px] w-[28px]')}/>
                    </Button>
                </div>
            </div>
            <div className={classNames(
                'relative w-full order-4',
                'md:basis-1/2',
            )}>
                <div className={classNames(cls.image, 'z-30')}>
                    <img src="https://placehold.co/394x600/171717/6C6C6C" alt=""/>
                </div>
            </div>

        </Section>
    );
};
