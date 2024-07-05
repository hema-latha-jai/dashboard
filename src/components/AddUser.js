import React from "react";
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


function AddUser({users,setusers}) {
    
    let navigate = useNavigate()
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [phone,setPhone] = useState("")
    let [address,setAddress] = useState("")

    let handleSave = ()=>{
      let newuserarray = [...users];
      newuserarray.push({
        name,email,phone,address
      })
      setusers(newuserarray)
      navigate("/dashboard")
    }


  return <>

    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Add User</h1>
                    </div> 
    
    <div className="container" >
       <Form>
         <Form.Group  className="mb-3" >
            <Form.Label >  Name  </Form.Label>
            <Form.Control type="text" placeholder="Name"  onChange={(e)=>setName(e.target.value)}/>
          </Form.Group>

          <Form.Group  Email="mb-3" >
            <Form.Label >  Email  </Form.Label>
            <Form.Control type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group  className="mb-3" >
            <Form.Label >  Phone  </Form.Label>
            <Form.Control type="text" placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}/>
          </Form.Group>

          <Form.Group  className="mb-3" >
            <Form.Label > Address </Form.Label>
            <Form.Control type="text" placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>
          </Form.Group>

          <Button variant = "primary" onClick={()=>handleSave()}> submit</Button>

      </Form>
    </div>
  </>
}

export default AddUser; 
