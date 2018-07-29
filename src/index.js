import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'; 
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'; 

// create redux require store and store require reducers and reducers require action
// applyMiddleWare()

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
); 

//provide the store to react 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
