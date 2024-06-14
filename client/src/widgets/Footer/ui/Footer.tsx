import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import Logo from '@/shared/assets/Logo.png'
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
import Button, {ButtonVariant} from "@/shared/ui/Button/Button";
import VKLogo from '@/shared/assets/VKLogo.svg';
import TelegramLogo from '@/shared/assets/TelegramLogo.svg';
import DiscordLogo from '@/shared/assets/DiscordLogo.svg';
import {TypoWeight} from "@/shared/ui/Typo/types";


interface FooterProps {
    children?: ReactNode,
}

export const Footer: FC<FooterProps> = ({
                                            children,
                                            ...props
                                        }) => {
    return (
        <div
            className={classNames('relative bg-dark-primary w-screen z-10 bottom-0 py-10 border-2 border-solid border-t-[#313131]')}>
            <div className={classNames('flex flex-col gap-10 px-4')}>
                <img src={Logo} width={64} alt=""/>
                <div className={classNames('flex flex-col gap-2')}>
                    <Typo.H4>Contact email:</Typo.H4>
                    <Typo.H4 variant={TypoVariant.SecondaryLight} underline>ouremail@gmail.com</Typo.H4>
                </div>
                <div className={classNames('flex gap-2')}>
                    <Button variant={ButtonVariant.Primary} className={classNames('p-1')}>
                        <TelegramLogo className={classNames('w-[31px]')}/>
                    </Button>
                    <Button variant={ButtonVariant.Primary} className={classNames('p-1')}>
                        <DiscordLogo className={classNames('w-[34px]')}/>
                    </Button>
                    <Button variant={ButtonVariant.Primary} className={classNames('p-1')}>
                        <VKLogo className={classNames('w-[34px]')}/>
                    </Button>
                </div>
                <hr className={classNames('border-none h-[1px] bg-[#4B4B4B]')}/>
                <div className={classNames('flex flex-col gap-4')}>
                    <Typo.H4 variant={TypoVariant.SecondaryLight} underline>Privacy Policy</Typo.H4>
                    <Typo.H4 variant={TypoVariant.SecondaryLight} underline>Terms of Service</Typo.H4>
                    <Typo.H4 variant={TypoVariant.SecondaryLight} underline>Cookies Settings</Typo.H4>
                </div>
                <Typo.H5 variant={TypoVariant.SecondaryLight} weight={TypoWeight.Extralight}>
                    © 2024 Name. All rights reserved.
                </Typo.H5>
            </div>

        </div>
    );
};
