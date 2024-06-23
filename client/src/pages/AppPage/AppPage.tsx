import React, {FC, ReactNode, useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import classNames from "classnames";
import {Button, ButtonVariant} from "@/shared/ui/Button/Button";
import {SidebarProvider} from "@/widgets/Sidebar/provider/Sidebar.provider";
import {Sidebar} from "@/widgets/Sidebar";
import {useSidebarDispatch} from "@/widgets/Sidebar/hooks/useSidebarDispatch";
import {SidebarActionType} from "@/widgets/Sidebar/types";
import {Module} from "@/widgets/Module/ui/Module";
import {Modules} from "@/widgets/Module/types/Modules";
import {useSidebar} from "@/widgets/Sidebar/hooks/useSidebar";

interface AppPageProps {
    children: ReactNode
}

const AppPage: FC<AppPageProps> = ({
                                       children,
                                       ...props
                                   }) => {
    const navigate = useNavigate();

    return (
        <div className={classNames('bg-secondary-dark w-screen min-h-screen')}>
            <SidebarProvider>
                <Sidebar/>
                {/*<Button*/}
                {/*    variant={ButtonVariant.Primary}*/}
                {/*    border*/}
                {/*    className={classNames('absolute top-20 left-4 p-3')}*/}
                {/*    onClick={() => {*/}
                {/*        navigate(-1)*/}
                {/*    }}*/}
                {/*>Go Back</Button>*/}
                <Outlet/>
            </SidebarProvider>
        </div>
    );
};

export default AppPage