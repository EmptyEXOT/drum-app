import {createBrowserRouter, Navigate} from "react-router-dom";
import {Root} from "@/root";
import React, {Suspense} from "react";
import {MainPage} from "@/pages/MainPage";
import {ErrorPage} from "@/pages/ErrorPage";
import {CoordinationPage} from "@/pages/Coordination";
import {Loader} from "@/shared/ui/Loader/ui/Loader";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement:
            <Root>
                <Suspense fallback={<Loader />}>
                    <ErrorPage/>
                </Suspense>
            </Root>,
        element: <Root/>,
        children: [
            {
                index: true,
                element:
                    <Suspense fallback={<Loader />}>
                        <MainPage/>
                    </Suspense>,
            },
            {
                path: 'coordination',
                element:
                    <Suspense fallback={<Loader />}>
                        <CoordinationPage />
                    </Suspense>
            }
        ],
    },
    {
        path: '*',
        element:
            <Navigate to={'/'}/>,
    },
])