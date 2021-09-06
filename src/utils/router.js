import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SignInLayout from '../components/SignInLayout';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Technology from '../pages/Technology';
import Politics from '../pages/Politics';
import Science from '../pages/Science';

function RouteWrapper({ page: Page, layout: Layout, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => (
           
          <Layout {...props}>
              
            <Page {...props} />
          </Layout>
        )}
      />
    );
  }
function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <RouteWrapper path="/sign-in"  layout={SignInLayout} page={SignIn}/>
                <RouteWrapper path="/sign-up"  layout={SignInLayout} page={Signup}/>
                {/* <RouteWrapper exact path="/"  layout={DashboardLayout} page={Dashboard}/>
                <RouteWrapper path="/workout"  layout={DashboardLayout} page={Workout}/>
                <RouteWrapper path="/profile"  layout={DashboardLayout} page={Profile}/> */}
            </Switch>
            
        </BrowserRouter>
    )
}

export default Router
