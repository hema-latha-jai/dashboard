import React from "react";
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import {useState} from "react";
import {useNavigate,useParams} from "react-router-dom";


function AdminProfile({users,setusers}) {
    
    let params = useParams()
    let navigate = useNavigate()
    let [name,setName] = useState("Admin")
    let [email,setEmail] = useState("admin@gmail.com")
    let [phone,setPhone] = useState("9878765677")
    let [address,setAddress] = useState("chennai")

    let handleSave = ()=>{
      let newuserarray = [...users];
      newuserarray.splice(params.id,1,{name,email,phone,address})
      setusers(newuserarray)
      navigate("/dashboard")
    }

 
  return <>

    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
                    </div> 
    
    <div className="container" >
       <Form>
         <Form.Group  className="mb-3" >
            <Form.Label >  Name  </Form.Label>
            <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
          </Form.Group>

          <Form.Group  Email="mb-3" >
            <Form.Label >  Email  </Form.Label>
            <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group  className="mb-3" >
            <Form.Label >  Phone  </Form.Label>
            <Form.Control type="text" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
          </Form.Group>

          <Form.Group  className="mb-3" >
            <Form.Label > Address </Form.Label>
            <Form.Control type="text" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
          </Form.Group>

          <Button variant = "primary" onClick={()=>handleSave()}> submit</Button>

      </Form>
    </div>
  </>


}

export default AdminProfile; 
