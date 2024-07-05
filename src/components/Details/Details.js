import {useState} from "react";
import './Details.css'
import { Outlet,useNavigate } from "react-router-dom";

function Deatails(){
	// sessionStorage = setItem('username','hema')
	let [currentpage,setCurrentPage] = useState(1);
	let navigate = useNavigate();
	return <> 
		<div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
        </div> 
        <div className="section-navigator" >
	        <ul>
	        	<li className={currentpage==1?"activePage":""} onClick={()=>{setCurrentPage(1);navigate("accounts")}}>Accounts</li>
	        	<li className={currentpage==2?"activePage":""} onClick={()=>{setCurrentPage(2);navigate("payments")}}>Payments</li>
	        	<li className={currentpage==3?"activePage":""} onClick={()=>{setCurrentPage(3);navigate("billdetails")}}>Bill Details</li>
	        	<li className={currentpage==4?"activePage":""} onClick={()=>{setCurrentPage(4);navigate("profile")}}>Profile</li>
	        	<li className={currentpage==5?"activePage":""} onClick={()=>{setCurrentPage(5);navigate("changepassword")}}>Change password</li>
	        </ul>
	     </div>

        <div className="section">
       	 	<Outlet />
        </div>

	</>
	
}

export default Deatails;