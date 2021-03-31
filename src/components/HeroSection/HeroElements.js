import styled from 'styled-components' ; 
import { MdArrowForward, MdArrowBack } from "react-icons/md";

export const HeroContainer = styled.div`
    background: #191919;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative; 
    z-index: 1;

    /* Add :before styles  */
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    position: fixed;
    width: 100vw;
    height: 100vh;
    --o-object-fit: cover;
    object-fit: cover;
    opacity: 10%;

    @media screen and (max-width: 768px) {
        position: fixed;
        width: 100%;
        height: 100vh;
        --o-object-fit: cover;
        object-fit: cover;
    }
`

export const HeroContent = styled.div`
    
    z-index: 3;
    max-height: 60vh;
    max-width: 1200px;
    position: absolute;
    padding: 0.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    padding-top: 4rem;
    color: #fff;
    font-size: 3rem; 
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1.4rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
    }
`
export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
    }
`
export const HeroBtnWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    transition: all 1s ease-in-out;
    margin-left: 0.5rem;
    font-size: 1.25rem;

    &:hover {
        transition: 0.2s ease-out;
        background: #fff;
        color: green;
    }
`

export const ArrowBack = styled(MdArrowBack)`
    margin-left: 1rem;
    font-size: 1.25rem;
`