import nodeLogo from '../assets/node.svg'
import reactLogo from '../assets/react.svg'
import leafletLogo from '../assets/leaflet.svg'
import viteLogo from '/vite.svg'

function Logo() {
    return(
        <div>
        <a href="https://nodejs.org" target="_blank">
          <img src={nodeLogo} className="logo node" alt="Node.js logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={leafletLogo} className="logo leaflet" alt="React logo" />
        </a>
      </div>
    )
}

export default Logo;