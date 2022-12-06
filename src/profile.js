import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Profile = () => {

const [param] = useSearchParams();
console.log("params",param.get("id"),param.get("name"))


  return (
    <div>
      <h1>profile</h1>
    </div>
  )
}

export default Profile