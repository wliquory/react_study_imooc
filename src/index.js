import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js';
import { IconfontGlobalStyle } from './static/iconfont/iconfont';
import App from './App';

ReactDOM.render(
<Fragment>
    <App/>
    <GlobalStyle/>
    <IconfontGlobalStyle/>
</Fragment>, document.getElementById('root'));
