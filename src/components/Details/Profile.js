import react from "react"
import './Details.css'

function Profile(){
  let name = sessionStorage.getItem('username');
  return <> 
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Profile</h1>
        </div> 

       <h1 className="h3 mb-0 text-gray-800">{name}</h1>
  </>
  
}

export default Profile; 