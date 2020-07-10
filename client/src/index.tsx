import React from 'react';
import ReactDOM from 'react-dom';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import {Provider} from 'react-redux';
import {App} from './foundation';
import * as serviceWorker from './serviceWorker';
import configureStore from 'store/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <Provider store={configureStore()}>
        <App />
      </Provider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
