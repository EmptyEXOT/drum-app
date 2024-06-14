import React, {FC, ReactNode, useEffect} from 'react';
import classNames from "classnames";
import cls from "./Navbar.module.scss"
import Menu from "@/widgets/Navbar/ui/Menu/Menu";
import Button, {ButtonVariant} from "@/shared/ui/Button/Button";
import Burger from "@/shared/ui/Burger/Burger";
import Logo from '@/shared/assets/Logo.png'
import {useNavbar} from "@/widgets/Navbar/hooks/useNavbar";
import {useNavbarDispatch} from "@/widgets/Navbar/hooks/useNavbarDispatch";
import {NavbarActionType} from "@/widgets/Navbar/types";
import {Link} from "react-router-dom";
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
import {Navigation} from "@/widgets/Navbar/ui/Navigation/Navigation";

interface NavbarProps {
    children?: ReactNode
    className?: string | undefined;
}

export const Navbar: FC<NavbarProps> = (
    {
        children,
        className,
        ...props
    }
) => {
    const {isOpen} = useNavbar()
    const dispatchNavbar = useNavbarDispatch()

    const switchIsOpen = () => {
        dispatchNavbar({type: NavbarActionType.Switch})
        // if (isOpen) {
        //     document.body.style.height = 'auto';
        //     document.body.style.overflow = 'unset';
        // } else {
        //     document.body.style.height = '100vh';
        //     document.body.style.overflow = 'hidden';
        // }
    }

    return (
        <>
            <div
                className={classNames('bg-dark-primary md:bg-primary-dark z-50 bg-opacity-100 md:bg-opacity-50 backdrop-blur-md border-solid border-2 border-b-neutral-500', cls.navbar)}>
                <div className={classNames('container flex justify-between mx-auto px-4 py-3 z-50')}>
                    <div className={classNames('flex gap-6')}>
                        <div className={classNames('flex flex-col justify-center w-full')}>
                            <img width={52} src={Logo} alt=""/>
                        </div>
                    </div>
                    <div className={classNames('flex gap-2')}>
                        <Navigation className={classNames('hidden md:flex')}/>
                        {/*<Link*/}
                        {/*    className={classNames('hidden lg:flex flex-col justify-center border-2 border-black py-2 px-4 rounded-md h-max self-center')}*/}
                        {/*    to={'login'}>*/}
                        {/*    <Typo.H3 className={classNames('text-nowrap')}>Sign In</Typo.H3>*/}
                        {/*</Link>*/}
                        {/*<Link*/}
                        {/*    className={classNames('hidden lg:flex flex-col justify-center border-2 border-black py-2 px-4 rounded-md h-max self-center bg-black')}*/}
                        {/*    to={'signup'}>*/}
                        {/*    <Typo.H3 className={classNames('text-nowrap')} variant={TypoVariant.Light}>Sign Up</Typo.H3>*/}
                        {/*</Link>*/}
                        <Button onClick={switchIsOpen}
                                variant={ButtonVariant.Primary}
                                className={classNames('pe-0 md:hidden')}>
                            <Burger isOpen={isOpen}/>
                        </Button>
                    </div>
                </div>
            </div>
            <Menu className={classNames('md:hidden')}/>
        </>
    );
};