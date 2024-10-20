import CountrySelector from '../CountrySelector'

export default function Header() {
  return (
    <header className="lg:p-4 p-2 pt-4 border-b bg-white">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center mx-4 mt-0 sm:mx-16 mb-2 sm:mb-0">
            <a href="/home">
              <img
                src="/assets/DeclanWorkLogo.png"
                alt="Declan Work"
                className="h-13 w-44 mr-2"
              />
            </a>
          </div>
          <CountrySelector />
        </div>
      </header>
  )
}
