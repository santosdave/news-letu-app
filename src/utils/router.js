import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignInLayout from '../components/SignInLayout';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Technology from '../pages/Technology';
import Politics from '../pages/Politics';
import Science from '../pages/Science';
import HomeLayout from '../components/HomeLayout';
import ArticleDetail from '../pages/ArticleDetail';

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
                <RouteWrapper exact path="/"  layout={HomeLayout} page={Home}/>
                <RouteWrapper path="/technology"  layout={HomeLayout} page={Technology}/>
                <RouteWrapper path="/politics"  layout={HomeLayout} page={Politics}/>
                <RouteWrapper path="/science"  layout={HomeLayout} page={Science}/>
                <RouteWrapper path="/profile"  layout={HomeLayout} page={Profile}/>
                <RouteWrapper path="/articleDetail"  layout={HomeLayout} page={ArticleDetail}/>
            </Switch>
            
        </BrowserRouter>
    )
}

export default Router
