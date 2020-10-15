import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddServices from "./Components/AddServices/AddServices";
import AdminAddServices from "./Components/AdminAddServices/AdminAddServices";
import AdminServicesLists from "./Components/AdminServicesLists/AdminServicesLists";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import OrderServicesList from "./Components/OrderedServicesList/OrderedServicesList";
import OrderSubmitForm from "./Components/OrderSubmitForm/OrderSubmitForm";
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
export const TitleContext = createContext();
const App = () => {
  const [loggedUser, setLoggedUser] = useState({});
  const [title, setTitle] = useState({});
  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
      <TitleContext.Provider value={[title, setTitle]}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/ordersubmitform">
              <OrderSubmitForm />
            </PrivateRoute>
            <PrivateRoute path="/adminserviceslists">
              <AdminServicesLists />
            </PrivateRoute>
            <Route path="/addservices">
              <AddServices />
            </Route>
            <Route path="/adminaddservices">
              <AdminAddServices />
            </Route>
            <Route path="/orderserviceslist">
              <OrderServicesList />
            </Route>
            <Route path="/reviewform">
              <ReviewForm />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </TitleContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
