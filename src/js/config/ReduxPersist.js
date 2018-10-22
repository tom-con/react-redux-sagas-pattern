import storage from 'redux-persist/es/storage'
import { persistStore } from 'redux-persist'

const baseConfig = {
    storage
}

export const REDUX_PERSIST = {
    active: true,
    reducerVersion: 1,
    stores: {
        root: {
            ...baseConfig,
            key: 'root',
            blacklist: ['appStore', 'authStore', 'toastr'],
        },
    }
}

export const checkVersion = (store) => {
    let persistor
    let tenMin = new Date()
    let versionCheck = REDUX_PERSIST.reducerVersion === parseInt(localStorage.getItem('reducerVersion'))
    let ageCheck = parseInt(localStorage.getItem('storeExpiration')) > tenMin.getTime()
    tenMin.setTime(tenMin.getTime() + (600000) * (process.env.NODE_ENV !== 'production' ? 100 : 1))

    // if(versionCheck && ageCheck)
    if(versionCheck)
        persistor = persistStore(store)
    else {
        persistor = persistStore(store)
        persistor.purge()
        localStorage.removeItem('token')
        localStorage.setItem('reducerVersion', REDUX_PERSIST.reducerVersion)
    }

    localStorage.setItem('storeExpiration', tenMin.getTime())
    return persistor
}