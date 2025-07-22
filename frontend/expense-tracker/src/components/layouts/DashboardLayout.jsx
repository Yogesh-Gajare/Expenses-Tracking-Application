import React,{useContext} from 'react'
import { UserContext } from '../../context/UserContext'; // ✅ Adjust path as needed
import Navbar from '../../components/layouts/Navbar';               // ✅ Adjust path as needed
import SideMenu from '../../components/layouts/SideMenu'; 

const DashboardLayout = ({children, activeMenu}) => {
    const {user} = useContext(UserContext)
  return (
    <div className=''>
        <Navbar activeMenu={activeMenu} /> 

        {user && (
            <div className='flex'>
                <div className='max-[1080px]:hidden'>
                    <SideMenu activeMenu = {activeMenu} />
                </div>
                <div className='grow mx-5'>{children}</div>
            </div>
        )}
    </div>
  )
}

export default DashboardLayout
