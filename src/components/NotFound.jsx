import { useNavigate } from 'react-router-dom'
import React from 'react'

function NotFound() {

    const navigate = useNavigate();
    React.useEffect(()=>{

        setTimeout(()=>{
            navigate("/");
        },2000)
    })


    return(
        <div>
            <h1>Oooopsss.... not found *-*</h1>
        </div>
    )
}

export default NotFound;