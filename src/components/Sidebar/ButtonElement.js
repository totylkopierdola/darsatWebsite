import styled from 'styled-components'; 
import {Link} from 'react-scroll';

export const Button = styled (Link)`
    border-radius: 3rem;
    background: ${({primary}) => (primary ? 'var(--orange)' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '0.875rem 3rem' : '0.875rem 1.875rem')};
    color: ${({dark}) => (dark ? '#01606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '1.25rem' : '1rem')};
    outline: none;
    border:none ;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border-color: #9ecaed;
    box-shadow: 0 0 1rem black;
    transition: all 0.2s ease-in-out; 
    /* width: 20em; */


    &:hover {
        transition: all 0.2s ease-in-out; 
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
        outline: none;
        border-color: #9ecaed;
        box-shadow: 0 0 1rem #9ecaed;
    }
`