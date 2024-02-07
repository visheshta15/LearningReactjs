import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom' 

function Dashboard() {
    const location  = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const handleClick = () => {
        console.log('gg')
        navigate(`/dashboard/${location.state.message.full_name}`)
    }
  return (
    <div>
        <button onClick={handleClick}>Get details</button>
        {/* <h1>Details</h1>
        <p>{`Full Name : ${location.state.message.full_name}`}</p>
        <p>{`User Name : ${location.state.message.username}`}</p>
        <p>{`Country : ${location.state.message.country_row_id}`}</p>
        <p>{`Email Id : ${location.state.message.email_id}`}</p>
        <p>{`Mobile No : ${location.state.message.mobile_number}`}</p>
        <p>{`Referal Id : ${location.state.message.referral_username}`}</p> */}

    </div>
  )
}

export default Dashboard