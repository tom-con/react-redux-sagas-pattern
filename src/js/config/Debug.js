const dev = process.env.NODE_ENV !== 'production'

/*
 * These configuration options allow for reactotron
 * and reduxLogging to only be active when the
 * environment is in development.
 *
 */

export default {
    reduxLogging: false,
    useReactotron: dev,
}
