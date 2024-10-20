import { Outlet } from "react-router-dom"

const Projects = () => {
  return (
      <>
        <section className='flex mx-auto flex-col w-full gap-4'>
            <div className="max-w-full sm:px-2">
            <div className='flex gap-3 min-w-full p-4 px-6 flex-col lg:flex-row'>
              <Outlet />
            </div>
            </div>
        </section>
      </>
  )
}

export default Projects