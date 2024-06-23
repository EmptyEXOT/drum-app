import {lazy} from "react";

export const AlphabetAppPageAsync = lazy(
    () => new Promise((res) => {
        //@ts-ignore
        setTimeout(() => res(import('./AlphabetAppPage')), 100)
    })
)