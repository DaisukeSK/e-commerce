import Styled from "styled-components"
import BG1 from '../../public/room.png'
import BG2 from '../../public/cooking.png'
import BG3 from '../../public/hiking.png'
import BG4 from '../../public/grass.png'

const maxWidth='500px';
const A_orange='rgb(246, 166, 31)';

export const BannerForLaptop=Styled.section<{opacity:number, count:number}>`
    @keyframes moveUp {
        0% {
            background-position-y: 60%;
            opacity: 0;
        }
        25% {
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        100% {
            background-position-y: 40%;
            opacity: 0;
        }
    }

    @keyframes moveDown {
        0% {
            background-position-y: 30%;
            opacity: 0;
        }
        25% {
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        100% {
            background-position-y: 70%;
            opacity: 0;
        }
    }

    @keyframes moveDown2 {
        0% {
            background-position-y: 20%;
            opacity: 0;
        }
        25% {
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        100% {
            background-position-y: 50%;
            opacity: 1;
        }
    }

    height: 300px;
    width: 100%;
    position: relative;

    background-image: url(${props=>props.count==0?BG1:props.count==7?BG2:props.count==14?BG3:BG4});
    animation-name: ${props=>props.count==7?'moveDown':props.count>=21?'moveDown2':'moveUp'};
    
    background-size: cover;

    animation-duration: 7s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;

    div, img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    div {
        font-size: 3rem;
        font-weight: bold;
        color: #FFFFFF;
        text-shadow: rgba(0, 0, 0, 0.5) 2px 2px 5px;
        opacity: ${props=>props.count>=25?0:1};
        transition: all 1s ease-in-out;
        white-space: nowrap;
    
        span {
            
            opacity: ${props=>props.opacity};
            color: ${props=>props.count==0?'#0C53D9':props.count==7?'#35BB1A':props.count==14?'#FF3E3E':'#F6A61F'};
            transition: all 1s ease-in-out;
        }
    }
    
    img {
        
        height: 70%;
        opacity: ${props=>props.count>=26?1:0};
        transition: all 5s;
        display: block;
        z-index: 2;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        opacity: ${props=>props.count>=24?.5:0};
        transition: all 3.5s;
        z-index: 1;
    }

    @media only screen and (max-width: ${maxWidth}) {
        display: none;
    }
    
`;

export const BannerForMobile=Styled.section`

    display: none;

    background-image: url(${BG4});
    background-size: cover;
    padding: 20px 0;
    img {
        width: 70%;
        margin: 0 auto;
        display: block;
    }
    
    @media only screen and (max-width: ${maxWidth}) {
        display: block;
    }

`;

export const AsideLi=Styled.li<{selected:boolean}>`

    padding: 5px 0;
    a {
        color: #ffffff;
        padding: 3px 7px;
        border-radius: 3px;
        transition: all .3s;
        background-color: ${props=>props.selected?'#ffffff':'transparent'};
        color: ${props=>props.selected?'#000000':'#ffffff'};
        pointer-events: ${props=>props.selected?'none':'auto'};
        &:hover {
            background-color: ${A_orange};
            color: #000000;
        }
    }
            
`;

export const AsideForMobile=Styled.aside<{open:boolean}>`

    display: none;

    position: absolute;
    top: 0;
    left: ${props=>props.open?0:'-200px'};
    transition: all .5s;
    width: 200px;
    height: 100vh;
    background-color: #333333;
    z-index: 1;

    &>img {
        padding: 10px;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
            padding: 5px 0 5px 20px;
            a {
                display: block;
                width: fit-content;
                color: #ffffff;
            }
        }
        .home {

            width: fit-content;
            margin: 0 auto;
            padding: 0;
            a {
                
                img {
                    width: 120px;
                    display: block;
                }
            }
        
        }
            hr {
                border-top: 1px solid rgba(170, 170, 170, .5);
                width: 90%;
            }
    }

    @media only screen and (max-width: ${maxWidth}) {
        display: block;
    }

`;

const blue='#273fc7'
export const SeeMore=Styled.div<{formobile:boolean}>`

    display: ${props=>props.formobile?'none':'block'};
    margin: ${props=>props.formobile?'5px auto':0};
    width: fit-content;

    a {
        color: ${props=>props.formobile?blue:'#ffffff'};
        transition: all .2s;
        display: flex;
    
        @keyframes spin{
            0% {
                transform: scale(100%, 100%);
            }
            50% {
                transform: scale(100%, 0%);
            }
            100% {
                transform: scale(100%, 100%);
            }
        }
        svg {
            margin-right: 5px;
            fill: ${props=>props.formobile?blue:'#ffffff'};
            animation-duration: 1s;
            animation-iteration-count: infinite;
        }
        &:hover {
            color: rgb(120, 255, 120);
            svg {
                fill: rgb(120, 255, 120);
                animation-name: spin;
            }
        }
    }

    @media only screen and (max-width: ${maxWidth}) {
        display: ${props=>props.formobile?'block':'none'};
    }
`;

export const FavDiv=Styled.div<{fav:boolean}>`

    cursor: pointer;
    background-color: ${props=>props.fav?'pink':'#f1f1f1'};
    display: flex;
    align-items: center;
    padding: 1px 5px;
    border: 1px solid ${props=>props.fav?'#FF4BAC':'rgb(202, 202, 202)'};
    border-radius: 5px;
    transition: all .3s;
    margin: 0 20px;
    svg {
        width: 20px;
        height: 20px;
        margin-right: 7px;
    }
    span {
        font-size: .9rem;
    }
    &: hover {
        background-color: ${props=>props.fav?'#FFA7B6':'#DCDCDC'};
    }
`;