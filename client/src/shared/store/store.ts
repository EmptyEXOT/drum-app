import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./types";
import {$api} from "@/shared/api/api";
import {AxiosInstance} from "axios";

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {

    }

    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api
                }
            }
        })
    })
}

export const store = createReduxStore()

export interface ThunkExtraArgs {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArgs
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch