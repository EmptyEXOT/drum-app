import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./types";
import {$api} from "@/shared/api/api";
import {AxiosInstance} from "axios";
import {sheetReducer} from "@/entities/Sheet/model/slice/Sheet.slice";
import {trackReducer} from "@/entities/Track/model/slice/Track.slice";

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        sheet: sheetReducer,
        track: trackReducer,
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