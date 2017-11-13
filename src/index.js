import  './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import reducers from 'reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import {Router, Route} from 'react-router'
import Layout from 'containers/layout'
import Pizza from 'containers/pizza'
import Basket from 'containers/basket'
import About from 'containers/about'
import Contact from 'containers/contact'
import Events from 'containers/events'


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component = {Layout}>
                 <Route path='/' component={Pizza} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/events' component={Events} />
             </Route>
            <Route path='/basket' component={Basket} />
        </Router>
    </Provider>,
    document.getElementById('root')
)
