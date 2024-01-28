import { Outlet } from 'react-router'
import Navigation from './Navigation'





const Layout = () => {
    return (
        <div className='flex flex-col gap-8 items-center h-screen'>
            <Navigation />
            <Outlet />
        </div>
    )
}
export default Layout