import React, {useState} from 'react'
import Video from '../../videos/pralkaFHD.mp4'
// import bg from '../../images/tools.jpg'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,ArrowForward, ArrowBack} from './HeroElements'
import { Button } from '../Sidebar/ButtonElement'


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
            <HeroContent>
                <HeroH1>SPRZEDAŻ I NAPRAWA PRALEK</HeroH1>
                    <HeroP>Naprawa pralek, zmywarek, piekarników Serwis AGD Kętrzyn</HeroP>
                    <HeroP>Rzetelni Specjaliści</HeroP>
                    <HeroP>Bez Ukrytych Kosztów</HeroP>
                    <HeroP>Darmowy Dojazd</HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="oferta" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        SPRAWDŹ NASZĄ OFERTĘ {hover ? <ArrowForward /> : <ArrowBack/> }
                    </Button>
                </HeroBtnWrapper> 
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
