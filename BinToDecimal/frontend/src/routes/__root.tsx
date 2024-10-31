import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
        <Navbar />
        <Outlet />
        <TanStackRouterDevtools />
    </React.Fragment>
  ),
})

const Navbar = () => {
    const activeProps = {
        style: {
            fontWeight: "bold"
        }
    }

    return (
        <>
            <h1>Bin2Dec</h1>
            <ul>
                <li>
                    <Link to="/" activeProps={activeProps}>Home</Link>
                </li>
                <li>
                    <Link to="/about" activeProps={activeProps}>About</Link>
                </li>
            </ul>
        </>
    )
}