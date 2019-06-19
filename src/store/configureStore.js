import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const middewares = [
        thunkMiddleware,
    ];

    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}