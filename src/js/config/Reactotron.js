import Config from './Debug'

/*
 * This file configures reactotron.
 * First it checks the DebugConfig to see
 * if we are not in production. Then it
 * adds plugins for redux and redux saga
 * support. Then connects to the app.
 * Finally it binds Reactotron to
 * window.console.tron for ease of access
 * without having to require it on every
 * page for use.
 *
 */

if(Config.useReactotron){

    const Reactotron = require('reactotron-react-js').default
    const { reactotronRedux } = require('reactotron-redux')
    const sagaPlugin = require('reactotron-redux-saga')

    Reactotron
        .configure({ name: 'React & Redux & Sagas' })
        .use(reactotronRedux())
        .use(sagaPlugin())
        .connect()

    window.console.tron = Reactotron
  }