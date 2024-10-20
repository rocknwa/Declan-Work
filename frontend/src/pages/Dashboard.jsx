import Overview from '@/components/dashboard/Overview'
import { DashboardBarchart } from '@/components/dashboard/DashboardBarchart'
import DashboardTable from '@/components/dashboard/DashboardTable'
import { useEffect } from 'react'
import { getUser } from '@/api/userService'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        const fetchUserData = async () => {
            try {
              await getUser(dispatch); // Pass dispatch to getUser
            } catch (error) {
              console.error("Error fetching user data:", error);
            }
          };
      
          fetchUserData();
    }, [dispatch])
  return (
        <>
            <section className='bg-white py-6 flex flex-col gap-6'>
                <Overview />
                <DashboardBarchart />
                <DashboardTable />
            </section>
        </>
    )
}

export default Dashboard