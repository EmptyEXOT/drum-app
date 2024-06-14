import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import Button, {ButtonVariant} from "@/shared/ui/Button/Button";
import OpenIcon from "@/shared/assets/openIcon.svg";
import {Header} from './Header';
import {Description} from './Description';
import VKLogo from '@/shared/assets/VKLogo.svg';
import TelegramLogo from '@/shared/assets/TelegramLogo.svg';
import DiscordLogo from '@/shared/assets/DiscordLogo.svg';


interface CommunityBlockProps {
    children?: ReactNode,
}

export const CommunityBlock: FC<CommunityBlockProps> = ({
                                                            children,
                                                            ...props
                                                        }) => {
    return (
        <div className={classNames('flex flex-col gap-6')}>
            <Header/>
            <Description/>

            <div className={classNames('flex justify-between gap-3')}>
                <Button variant={ButtonVariant.Primary}
                        className={classNames(
                            'w-full py-3 px-4 flex flex-col gap-2 items-center justify-center bg-dark-secondary border border-solid border-neutral rounded-lg',
                            'md:w-full md:px-0 md:justify-start',
                        )}>
                    <TelegramLogo className={classNames('w-[36px]')}/>
                    Discord
                </Button>
                <Button variant={ButtonVariant.Primary}
                        className={classNames(
                            'w-full py-3 px-4 flex flex-col gap-2 items-center justify-center bg-dark-secondary border border-solid border-neutral rounded-lg',
                            'md:w-full md:px-0 md:justify-start',
                        )}>
                    <DiscordLogo className={classNames('w-[38px]')}/>
                    Telegram
                </Button>
                <Button variant={ButtonVariant.Primary}
                        className={classNames(
                            'w-full py-3 px-4 flex flex-col gap-2 items-center justify-center bg-dark-secondary border border-solid border-neutral rounded-lg',
                            'md:w-full md:px-0 md:justify-start',
                        )}>
                    <VKLogo className={classNames('w-[36px]')}/>
                    VK
                </Button>
            </div>
        </div>
    );
};
