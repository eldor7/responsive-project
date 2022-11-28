import styled from "styled-components";

export const Maincontainer = styled.div`
background: #1e1e1e;
text-align: center;
width: 100%;
h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    text-align: center;
    cursor: default;
}
h2{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    margin-left: 6%;
    cursor: default;
    :hover{
        transform: scale(1.05);
        border-bottom: 2px solid yellow;
    }
    
}

`

export const Downcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 5%;
@media (max-width: 450px) {
    display: none;
}
`

export const Design = styled.div`
justify-content: space-between;
/* padding-left: 8%; */
`


export const Webccon = styled.div`
display: grid;
align-items: center;
grid-template-columns: auto auto auto auto;
gap: 28px 29px;
justify-content: center;
padding-top: 7%;
img{
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 20px 20px;
    align-items: center;
    justify-content: center;
    max-height: 288px;
    width: 100%;
    pointer-events: painted;
    :hover{
        transform: scale(1.05);
    }


    
}


@media (max-width: 450px) {
   padding-top: 5%;
   display: grid;
   grid-template-columns: auto;
   align-items: center;
   justify-content: center;
   margin-left: 7%;
   /* margin-right: 7%; */

}


@media only screen, (max-width: 1024px) {
   padding-top: 5%;
   box-sizing: border-box;
   display: grid;
   grid-template-columns: auto auto auto auto;
   gap: 20px 20px;
   align-items: center;
   justify-content: center;

}



`


export const Graficcon = styled.div`
display: none;
`



export const Motion = styled.div`
display: none
`

