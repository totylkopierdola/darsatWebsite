import React, {useState} from 'react'
import Video from '../../videos/pralkaFHD.mp4'
// import bg from '../../images/tools.jpg'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,ArrowForward, ArrowBack} from './HeroElements'
import { Button } from '../Sidebar/ButtonElement'
import Naprawa from '../../pages/naprawa'


const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />            
                    {/* <Image>
                        <div>
                            <img src={bg} alt=""></img>        
                        </div>
                    </Image> */}
            </HeroBg>
            <naprawaContent/>
        </HeroContainer>
    )
}

export default HeroSection
