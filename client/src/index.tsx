import {createRoot} from "react-dom/client";
import React, {StrictMode} from "react";
import '@/root/global.scss'
import {RouterProvider} from "react-router-dom";
import {router} from "@/shared/router/router";
import {StoreProvider} from "@/shared/store/StoreProvider";
import {ThemeProvider} from "@/shared/theme/ThemeProvider";


const node = document.getElementById('root');
if (!node) {
    throw new Error(`Node with id 'root' doesn't exist`)
}

createRoot(node)
    .render(
        <ThemeProvider>
            <StoreProvider>
                <RouterProvider router={router}/>
            </StoreProvider>
        </ThemeProvider>
    )

