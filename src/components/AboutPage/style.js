import styled from "styled-components";

export const Maincon = styled.div`
background: #1e1e1e;
height: 100%;
color: #87cee8;
h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    text-align: center;
    padding-top: 70px;
    @media (max-width: 450px) {
}
}
@media (max-width: 450px) {
    height: 100%;
    background: #1e1e1e;
}
@media (max-width: 930px) {
    height: 100%;
    background: #1e1e1e;
}


`

export const Downcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 50px;
margin-left: 6%;
@media (max-width: 450px) {
     display: flex;
     flex-direction: column;
}
@media (max-width: 930px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

}
`




export const Leftcon = styled.img`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
max-width: 380px;
max-height: 400px;
@media (max-width: 450px) {
max-height: 290px;
}

`


export const Rightcon = styled.div`
color: rgb(216, 191, 216);
padding: 10%;
flex: 1;
width: 100%;
h2{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    @media (max-width: 450px) {
        font-size: 40px;
        text-align: center;
}
}
h3{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
    padding-top: 1%;
    @media (max-width: 450px) {
        font-style: normal;
        font-size: 20px;
        line-height: 18px;
        padding-top: 15px;

}
}
p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    padding-top: 2.5%;
    @media (max-width: 450px) {
    padding-top: 40px;
}
}

@media (max-width: 450px) {
   padding-top: 20px;
}

`


export const Littlecon = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
@media (max-width: 450px) {
    display: grid;
    text-align: left;
    justify-content: left;
}

`

export const Left = styled.div`
flex: 1;
padding-top: 5%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 150%;
color: #FFFFFF;
`


export const Right = styled.div`
flex: 1;
padding-top: 5%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 150%;
color: #FFFFFF;
@media (max-width: 450px) {
    padding-top: 10%;

}
`


export const Skillscon = styled.div`
display: flex;
justify-content: left;
background: #000;
padding-bottom: 80px;
h2{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    margin-top: 10%;
}
h1{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
}
span{
    display: flex;
    align-items: flex-end;
    justify-content: right;
}
@media (max-width: 450px) {
    display: grid;
    text-align: left;
    justify-content: center;
    width: 100%;
}
img{
    width: 100%;

}
@media (max-width: 950px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`

export const Skilleft = styled.div`
flex: 1;
display: grid;
align-items: center;
justify-content: center;
@media (max-width: 450px) {
    width: 90%;
    display: grid;
    align-items: center;
    justify-content: center;
}


`


export const SkilRight = styled.div`
flex: 1;
display: grid;
align-items: center;
justify-content: center;
@media (max-width: 450px) {
    width: 90%;
    display: grid;
    align-items: center;
    justify-content: center;
}

`
