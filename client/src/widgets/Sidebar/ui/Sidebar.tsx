import React, {FC} from 'react';
import classNames from "classnames";
import {useSidebar} from "@/widgets/Sidebar/hooks/useSidebar";
import {useSidebarDispatch} from "@/widgets/Sidebar/hooks/useSidebarDispatch";
import {SidebarActionType} from "@/widgets/Sidebar/types";
import {Button, ButtonVariant} from "@/shared/ui/Button/Button";
import OpenIcon from 'assets/openIcon.svg';
import {createPortal} from "react-dom";
import {Module} from "@/widgets/Module/ui/Module";

interface SidebarProps {
    // children: ReactNode,
}

export const Sidebar: FC<SidebarProps> = ({
                                              ...props
                                          }) => {
    const {modules, isOpen} = useSidebar()
    const dispatch = useSidebarDispatch()

    return (
        <div
            className={classNames(
                'transition-all duration-150 absolute w-96 max-w-screen-sm h-screen bg-primary-dark border-r-2 border-solid border-r-neutral-500 flex pt-16 ps-2 pe-0',
                isOpen
                    ? 'left-0'
                    : '-left-[334px]',
            )}>
            {isOpen &&
                createPortal(<div onClick={() => {dispatch({type: SidebarActionType.Close})}} className={classNames('top-0 bottom-0 right-0 left-0 absolute z-0')}/>, document.body)}
            <div className={classNames('w-full pt-2 z-10 flex flex-col gap-4')}>
                {modules.map(ModuleInstance => <Module><ModuleInstance/></Module>)}
            </div>
            <Button
                className={classNames('w-auto p-2 h-full')}
                variant={ButtonVariant.Primary}
                onClick={() => {
                    dispatch({type: SidebarActionType.SwitchIsOpen})
                }}
            >
                <OpenIcon style={{fill: '#9F9F9F'}} className={classNames(
                    isOpen && 'rotate-180 transition-all duration-150'
                )}/>
            </Button>
        </div>
    );
};
