import styled from "styled-components";

export const Container = styled.div`
`

export const Navcon = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 80px;
background: #121212;
position: sticky;
top: 0;
width: 100%;
@media (max-width: 450px) {
    display: flex;
    width: 100%;
}
`

export const Logo = styled.img`
width: 40px;
height: 40px;
margin-left: 3%;
:hover{
    width: 50px;
    height: 50px;
}
`



export const Menu = styled.div`
display: grid;
grid-template-columns: auto auto auto auto auto;
align-items: center;
justify-content: right;
color: #fff;
flex: 1;
li{
    padding-right: 70px;
    color: #fff;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    :hover{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: yellow;
    }
   
}

@media  (max-width: 450px) {
   display : none;



}

@media  (max-width: 930px) {
   display : none;
}

`


export const Icon = styled.div`
color: white;
width: 70px;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 5%;
@media (min-width: 930px) {
    display: none;
}

`

export const Resmencon = styled.div`
background: #1e1e1e;
color: #fff;
text-alian: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
li{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    padding-top: 5%;
}
@media (max-width: 950) {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    margin-right: 5%; 
}
`


export const Homecon = styled.div`
background: #1e1e1e;
display: flex;
align-items: center;
justify-content: center;
color: aliceblue;
@media (max-width: 770px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    /* padding-left: 2%; */
    /* padding-right: 2%; */

}



`


export const Rightcon = styled.div`
width: 100%;
flex: 1;
display: flex;
align-items: center;
justify-content: center;
margin-top: 40px;

.img{

@media (max-width: 450px) {
    max-height: 220px;
}
@media only screen and (max-width: 1024px) {
   /* max-width: 408px;
    max-height: 409px; */
   
}
}
`

export const Leftcon = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
h4{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    line-height: 77px;
    cursor: default;
    color: #6a5ac6;

   @media (max-width: 450px) {
        font-size: 28px;
        color: aqua;
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 200;
        font-size: 32px;
        line-height: 37px;
        cursor: default;
        text-align: center;
}

}
p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 190px;
    font-size: 19px;
    line-height: 120%;
    cursor: default;
    text-align: left;
@media (max-width: 450px) {
    font-size: 22px;
    text-align: center;
    font-weight: 390;
    line-height: 120%;
    padding-top: 5%;
}


@media only screen and (max-width: 1024px) {
    font-size: 19px;
}
}

@media (max-width: 450px) {
    padding-top: 5%;

}

`

export const Btn = styled.div`
display: flex;
align-items: center;
margin-top: 5%;
button{
    margin-top: 20px;
    text-align: center;
    width: 170px;
    height: 60px;
    border-radius: 28px;
    @media (max-width: 450px) {
        text-align: center;
        max-width: 100px;
        height: 45px;
        margin-left: 5%;
        margin-top: 28px;
}
   
}
.btnn{
    width: 250px;
    margin-left: 9%;
@media (max-width: 450px) {
    max-width: 160px;
    font-size: 10px;
    height: 45px;
}
:hover{
    background: plum;
    color: #000;
    font-size: 15px;
}
}
@media (max-width: 450px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    margin-top: 20px;
}


`

