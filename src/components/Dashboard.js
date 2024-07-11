import Card from "./Card";
import Table from 'react-bootstrap/Table';
import {useNavigate} from "react-router-dom";

function Dashboard({users,setusers}) {
    let navigate = useNavigate()
    let data =[
    {
        title:"Earnings (Monthly)",
        value:"$40000",
        color:"primary",
        icon:"fa-calender",
        isProgress :false,
      },{
        title:"Earnings (Anual)",
        value:"160000",
        color:"success",
        icon:"fa-doller-sign",
        isProgress :false,
      },
      {
        title:"Task",
        value:"80%",
        color:"info",
        icon:"fa-doller-sign",
        isProgress :true,
      },
      {
        title:"Pending Request",
        value:"18",
        color:"warning",
        icon:"fa-comments",
        isProgress :false,
      },
    ]

    let handleDelete = (i)=>{
      let newuserarray = [...users];
      newuserarray.splice(i,1);
      setusers(newuserarray);
    }

  return <>
      <div className="container-fluid">

                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    </div> 
          
                    <div className="row">
                      {
                        data.map((e,i)=>{
                          return <Card key={i}
                            title={e.title}
                            value={e.value}
                            color={e.color}
                            icon={e.icon}
                            isProgress={e.isProgress}
                          />
                        })
                        
                      }
                        
                    </div>
      </div>

      <div className="container-fluid">

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {
                  users.map((e,i)=>{
                    return <tr key={i}>
                      <td>{i+1}</td>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.phone}</td>
                      <td>{e.address}</td>
                      <td><button type="button" className="btn btn-primary" onClick={()=>{navigate(`/edituser/${i}`)}}>Edit</button>
                        &nbsp;
                        <button type="button" className="btn btn-danger" onClick={()=>handleDelete(i)}>Delete</button> 
                      </td>

                    </tr>
                  })
                }
                          
            </tbody>
          </Table>

      </div>

  </>
}

export default Dashboard; 
