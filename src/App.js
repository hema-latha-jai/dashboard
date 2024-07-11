// import React from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Details from "./components/Details/Details";

import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";

function App() {

  let [users,setusers] = useState([{
    name:"user1",
    email:"user1@gmail.com",
    phone:"34534654",
    address:"chennai1",
  },
  {
    name:"user2",
    email:"user2@gmail.com",
    phone:"56456456",
    address:"chennai2",

  }])

  return <>
  <BrowserRouter>
      <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Routes>
                <Route path="/dashboard" element={<Dashboard users={users} setusers={setusers} />} />
                <Route path="/adduser" element={<AddUser users={users} setusers={setusers} />} />
                <Route path="/edituser/:id" element={<EditUser users={users} setusers={setusers} />} />
                <Route path="/profile" element={<AdminProfile users={users} setusers={setusers} />} />
                <Route path="/details"  element={<Details />} >


                </Route>

                <Route path="*"  element={<Navigate to="/dashboard/" />} />
              </Routes>
            </div>
          </div>
       </div>
  </BrowserRouter>

  </>
}

export default App; 
