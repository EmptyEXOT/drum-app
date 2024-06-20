import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import ShieldIcon from 'assets/ShieldIcon.svg'
import SettingIcon from 'assets/SettingsIcon.svg'
import ShoppingIcon from 'assets/ShoppingIcon.svg'
import {ButtonVariant, Button} from "@/shared/ui/Button/Button";
import {Section} from "@/shared/ui/Section/Section";
import {Header} from './Components/Header'
import {Description} from './Components/Description'
import {Block} from "./Components/Block";
import {Img} from "@/shared/ui/Image/Img";

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
                'md:flex md:flex-col md:basis-1/2 md:gap-8',
                'lg:basis-7/12'
            )}>
                <Header/>
                <Description/>
                <div className={classNames('flex flex-col gap-8 order-5 justify-start w-full')}>
                    <Block
                        header={'Top Quality'}
                        description={'Production using 3D printing is underway. Each device is being thoroughly tested and fine-tuned.'}
                        icon={<ShieldIcon className={classNames('w-[20px]')}/>}
                    />
                    <Block
                        header={'Customization'}
                        description={'You can choose a device from the list of pre-configured options or customize the specifications as needed to create a unique device.'}
                        icon={<SettingIcon className={classNames('w-[20px]')}/>}
                    />
                </div>

                <div className={classNames('flex gap-5 w-full justify-items-start flex-wrap order-5 pt-3')}>
                    <Button
                        border
                        variant={ButtonVariant.Primary}
                        className={classNames('py-2 px-4 flex items-center gap-2')}
                    >
                        <ShoppingIcon />
                        Offers
                    </Button>
                    <Button
                        variant={ButtonVariant.Secondary}
                        className={classNames('py-2 px-4')}
                    >
                        Learn More
                    </Button>
                </div>
            </div>
            <div className={classNames(
                'relative w-full order-4',
                'md:basis-1/2',
                'lg:basis-5/12',
            )}>
                <Img src={'https://placehold.co/394x600/171717/6C6C6C'} alt={'Drum pad'}/>
                {/*<div className={classNames('z-30 relative')}>*/}
                {/*    <img className={classNames('object-contain h-full w-full')} src="https://placehold.co/394x600/171717/6C6C6C" alt=""/>*/}
                {/*</div>*/}
            </div>

        </Section>
    );
};
