import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <>
            <div>error-page</div>
            <Link to="/"> go to home page </Link>
        </>
    )
}

export default ErrorPage