import { useState } from 'react';


import ImageHero from './components/ImageHero';
import HeroDesktop from './components/HeroDesktop';
import HeroMobile from './components/HeroMobile';
import HeroDesktopCover from './components/HeroDesktopCover';
import NavComp from './components/NavComp';
import NavMobileComp from './components/NavMobileComp';
import NavCover from './components/NavCover';
import AllCover from './components/AllCover';

function App() {

  const [menu, setMenu] = useState(false)
  
  
  return (
    <AllCover menu={menu}>
      <NavCover>
        <NavComp/>
        <NavMobileComp menu={menu} setMenu={setMenu}/>
      </NavCover>

      <HeroDesktopCover>
        <ImageHero/>
        <HeroDesktop/>
      </HeroDesktopCover>
      <HeroMobile/>
    </AllCover>

  )
}

export default App
