import React,{Component} from 'react'
import TestTwoRoutes from '../userRoutes/users.routes'
import CommonRoutes from '../commonRoutes/commonRoutes.routes'
import AuthGuard from '../guards/authGuard.guard'

import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom'

export default class RouteMain extends Component {
    render(){
        return(
        <div>
                <Router>
                    <Switch>
                        <AuthGuard path='/auth' component={TestTwoRoutes}/>
                        <Route component={CommonRoutes} />
                    </Switch>
                </Router>
            </div>
        )
    }
}