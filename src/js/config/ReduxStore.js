import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import logger from 'redux-logger'
import { persistReducer } from 'redux-persist'

import Config from './Debug'
import Reactotron from './Reactotron'
import {REDUX_PERSIST as PersistConfig, checkVersion} from "./ReduxPersist"

/*
 * The store configuration file is used to control
 * how stores are created. This is especially useful
 * for adding redux saga and reactotron, as reactotron
 * needs to wrap the store.
 *
 * This configuration set-up also means that we get to
 * easily apply middelware and enhancers all in one place.
 * Fincally it allows for easy implementation of redux persist
 * and combination of reducers in a nice place.
 *
 *
 */

import rootSaga from '../sagas'
import reducers from '../reducers/index'

const configureStore = (rootReducer, rootSaga) => {
    /* ------------ Redux Configuration ------------ */
    const middleware = []
    const enhancers = []

    /* ------------ Saga Middleware ------------ */

    const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null
    const sagaMiddleware = createSagaMiddleWare({sagaMonitor})


    if(Config.reduxLogging)
        middleware.push(sagaMiddleware, logger)
    else
        middleware.push(sagaMiddleware)

    enhancers.push(applyMiddleware(...middleware))

    /* ------------ Redux Perist @ Local Storage ------------ */

    const reducer = persistReducer(PersistConfig.stores.root, rootReducer)

    /* ------------ Determine whether to use Reactotron createStore ------------ */

    const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore

    /* ------------ Create Store and Persistor ------------ */

    let store = createAppropriateStore(reducer, compose(...enhancers))


    let persistor = checkVersion(store)

    // This is where we will run the ol' Sagas
    sagaMiddleware.run(rootSaga)

    return { persistor, store }

}

// It will be:
export default () => configureStore(combineReducers(reducers), rootSaga)