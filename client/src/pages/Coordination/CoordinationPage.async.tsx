import {lazy} from "react";

export const CoordinationPageAsync = lazy(
    () => new Promise((res) => {
        //@ts-ignore
        setTimeout(() => res(import('./CoordinationPage')), 100)
    })
)