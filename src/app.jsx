import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'components/Main';
import Timer from 'components/Timer';
import Countdown from 'components/Countdown';

import 'style!css!foundation-sites/dist/foundation.min.css';
import 'style!css!sass!appStyles/app.scss';
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute path="" component={Timer}/>
      <Route path="countdown" component={Countdown}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

