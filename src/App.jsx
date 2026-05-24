import { useState } from 'react'
import fish from './assets/images/IMG_1905.jpg'
import fistbump from './assets/images/fistbump.png'
import elon from './assets/videos/elon.mp4'
import grub from './assets/images/GRUB.png'
import tech from './assets/images/tech.jpeg'
import './index.css'
import {LoganPaul} from "./LoganPaul.jsx";

function FistBump() {
    return (
        <div>
            <h3>Fist Bump</h3>
            <img src={fistbump} alt="reactLogo" />
        </div>
    )
}
function App() {
  //const [count, setCount] = useState(0)

    return (
        <>
          <div className="walter-container">
            <h1>Andres Pineda</h1>
            <h3>College Graduate and Future AI Full Stack LLM Developer</h3>
              <div>
                  <h2>Achivemnets</h2>
                  <p>Installed GRUB bootloader for SFMUNI</p>
                  <img src={grub} alt="React Logo" />

                  <h2>Coding Thing Token</h2>
                  <p>You can see the work of a genius in action</p>
                  <img src={tech} alt="React Logo" />
                  <a href="http://localhost:300">http://localhost:3000</a>
                  <video width="600" controls autoPlay>
                      <source src={elon} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>

                  <h2>Cool Fish Photo</h2>
                  <img src={fish} alt="React Logo" />
                  <p>This is a refrence to Hajime No Ipo because he smells like fish and is bullied for it in the Animé</p>
              </div>
              <FistBump />
              <LoganPaul/>
          </div>

        </>
        )
        }

        export default App
