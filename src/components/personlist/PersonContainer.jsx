import React from 'react'
import { Outlet } from 'react-router-dom'

const PersonContainer = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default PersonContainer
