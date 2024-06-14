import React, {ReactNode} from 'react';
import './global.scss'
import {Outlet} from "react-router-dom";
import {NavbarProvider} from "@/widgets/Navbar/provider/NavbarProvider";

export const Root = ({children}: { children?: ReactNode }) => {
    return (
        <NavbarProvider>
            {children}
            <Outlet/>
        </NavbarProvider>
    );
};
