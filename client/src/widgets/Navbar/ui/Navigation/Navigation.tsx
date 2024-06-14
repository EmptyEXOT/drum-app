import React, {FC} from 'react';
import classNames from "classnames";
import NavbarLink from "../NavbarLink";
import {Typo} from "@/shared/ui/Typo/Typo";
import {Link} from "react-router-dom";
import {Dropdown} from "@/shared/ui/Dropdown/Dropdown/Dropdown";
import {DropdownProvider} from "@/shared/ui/Dropdown/provider/Dropdown.provider";
import {useBreakpoint} from '@/shared/hooks/useBreakpoint';
import {Menu} from "@/shared/ui/Menu/ui/Menu";


interface NavigationProps {
    className?: string
}

export const Navigation: FC<NavigationProps> = ({className, ...props}) => {
    const {isMd} = useBreakpoint('md')
    const {isSm} = useBreakpoint('sm')


    return (
        <div
            className={classNames('w-full flex flex-col md:flex-row gap-4 md:justify-between md:w-full', className)}>
            <NavbarLink to={'/'}><Typo.H3>Main</Typo.H3></NavbarLink>
            <NavbarLink to={'hardware'}><Typo.H3>Hardware</Typo.H3></NavbarLink>
            <NavbarLink to={'news'}><Typo.H3>News</Typo.H3></NavbarLink>
            {!isMd ?
                <DropdownProvider>
                    <Dropdown
                        title={<NavbarLink to={'app'}><Typo.H3>Exercises</Typo.H3></NavbarLink>}
                        control={<Dropdown.Control/>}
                    >
                        <div className={classNames(
                            'text-amber-600 w-full flex flex-col gap-4 pt-3',
                        )}>
                            <NavbarLink to={'app/coordination'}><Typo.H3>Coordination</Typo.H3></NavbarLink>
                            <NavbarLink to={'app/alphabet'}><Typo.H3>Alphabet</Typo.H3></NavbarLink>
                            <NavbarLink to={'app/rudiments'}><Typo.H3>Rudiment</Typo.H3></NavbarLink>
                        </div>
                    </Dropdown>
                </DropdownProvider> :
                <Menu anchor={<div><Typo.H3>Exercises</Typo.H3></div>}
                      className={classNames(
                          'top-8 bg-dark-primary p-4 border border-solid border-neutral-700 rounded-xl flex flex-col gap-4 right-0'
                      )}>
                    <NavbarLink to={'app/coordination'}><Typo.H3>Coordination</Typo.H3></NavbarLink>
                    <NavbarLink to={'app/alphabet'}><Typo.H3>Alphabet</Typo.H3></NavbarLink>
                    <NavbarLink to={'app/rudiments'}><Typo.H3>Rudiment</Typo.H3></NavbarLink>
                </Menu>
            }

        </div>
    );
};

