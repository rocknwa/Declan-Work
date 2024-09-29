import CountrySelector from '../CountrySelector'

export default function Header() {
  return (
    <header className=" p-4 border-b bg-white">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center mx-4 sm:mx-16 mt-2 mb-2 sm:mb-0">
            <img
              src="/assets/DeclanWorkLogo.png"
              alt="Declan Work"
              className="h-13 w-44 mr-2"
            />
          </div>
          <CountrySelector />
        </div>
      </header>
  )
}
