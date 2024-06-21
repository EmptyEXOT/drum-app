import {createBrowserRouter, Navigate} from "react-router-dom";
import {Root} from "@/root";
import React, {Suspense} from "react";
import {MainPage} from "@/pages/MainPage";
import {ErrorPage} from "@/pages/ErrorPage";
import {CoordinationPage} from "@/pages/Coordination";
import {Loader} from "@/shared/ui/Loader/ui/Loader";
import {IndevPage} from "@/pages/IndevPage";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement:
            <Root>
                <Suspense fallback={<Loader/>}>
                    <ErrorPage/>
                </Suspense>
            </Root>,
        element: <Root/>,
        children: [
            {
                index: true,
                element:
                    <Suspense fallback={<Loader/>}>
                        <MainPage/>
                    </Suspense>,
            },
            {
                path: 'hardware',
                element:
                    <Suspense fallback={<Loader/>}>
                        <IndevPage/>
                    </Suspense>,
            },
            {
                path: 'news',
                element:
                    <Suspense fallback={<Loader/>}>
                        <IndevPage/>
                    </Suspense>,
            },
            {
                path: 'app',
                children: [
                    {
                        path: 'coordination',
                        element:
                            <Suspense fallback={<Loader/>}>
                                <IndevPage homeLink={'/app'} homeText={'App List'}/>
                            </Suspense>
                    },
                    {
                        path: 'rudiments',
                        element:
                            <Suspense fallback={<Loader/>}>
                                <IndevPage homeLink={'/app'} homeText={'App List'}/>
                            </Suspense>
                    },
                    {
                        path: 'alphabet',
                        element:
                            <Suspense fallback={<Loader/>}>
                                <IndevPage homeLink={'/app'} homeText={'App List'}/>
                            </Suspense>
                    },
                    {
                        path: '*',
                        element:
                            <Navigate to={'/app'}/>,
                    },
                ]
            },
            {
                path: 'auth',
                children: [
                    {
                        index: true,
                        element:
                            <Suspense fallback={<Loader/>}>
                                <IndevPage/>
                            </Suspense>
                    },
                    {
                        path: 'register',
                        element:
                            <Suspense fallback={<Loader/>}>
                                <IndevPage/>
                            </Suspense>
                    },
                    {
                        path: 'recover',
                        element:
                            <Suspense fallback={<Loader/>}>
                                <IndevPage/>
                            </Suspense>
                    },
                    {
                        path: '*',
                        element:
                            <Navigate to={'/auth'}/>,
                    },
                ]
            }
        ],
    },
    {
        path: '*',
        element:
            <Navigate to={'/'}/>,
    },
])