import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AdminDashboard from "./components/Dashboard";
import AddJudgment from "./components/AddJudgment";
import DeleteJudgment from "./components/DeteleJudgment";
import EditJudgment from "./components/EditJudgment";
import ReviewRequests from "./components/ReviewRequest";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 bg-prim">
          <Switch>
            <Route exact path="/">
              <Redirect to="/admin/dashboard" />
            </Route>
            <Route path="/admin/dashboard" component={AdminDashboard} />
            {/* <Route path="/admin/judgments" component={AllJudgment} /> */}
            <Route path="/admin/add-judgment" component={AddJudgment} />
            <Route path="/admin/delete-judgment" component={DeleteJudgment} />
            <Route path="/admin/edit-judgment" component={EditJudgment} />
            <Route path="/admin/review-requests" component={ReviewRequests} />
            <Route path="/profile/:id" component={Profile} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
