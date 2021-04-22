import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard";
import ImgManage from "./pages/ImgManage/ImgManage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/imgmanage" component={ImgManage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
