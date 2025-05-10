import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema } from './state-schema';
import { counterReducer } from '../../../../entities/counter';
import { userReducer } from '../../../../entities/user';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
