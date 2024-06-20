import React, {FC} from 'react';
import classNames from "classnames";
import cls from './Menu.module.scss'
import {Navigation} from "@/widgets/Navbar/ui/Navigation/Navigation";
import {useNavbar} from "@/widgets/Navbar/hooks/useNavbar";

interface MenuProps {
    className?: string
}

export const Menu: FC<MenuProps> = ({className, ...props}) => {
    const {isOpen} = useNavbar()

    return (
        <div
            className={classNames(
                'px-4 fixed flex gap-5 top-8 bottom-0 md:bottom-auto bg-primary-dark pt-8 justify-start z-40 w-screen bg-opacity-85 backdrop-blur-md overflow-y-scroll',
                'md:pt-2 md:justify-evenly md:border-b-2 border-b-neutral-500',
                cls.menuWrapper,
                isOpen ? cls.open : cls.close,
                className
            )}>
            <Navigation/>
        </div>
    );
};
