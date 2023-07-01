import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Register } from "../container/register";
import BasicTable from "../container/users";
import { EditUserId } from "../container/editRegister";

function Routes(){
    return(
        <Router>
            <Switch>
                <Route component={Register} path="/Register" />
                <Route component={EditUserId} path="/Edit"/>
                <Route component={BasicTable} path="/" />
            </Switch>
        </Router>
    )
}
export default Routes