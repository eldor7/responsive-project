import styled from "styled-components";

export const Contaiiner = styled.div`
background: #212121;
text-align: center;
margin-top: 10%;
/* display: none; */

h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 29px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    text-align: center;
    @media (max-width: 450px) {
        font-size: 28px;
   
    }
}

@media (max-width: 450px) {
   
    }

`

export const Textcon = styled.div`
p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 44px;
    line-height: 150%;
    color: #FFFFFF;
    padding-top: 5%;
    text-align: left;
    padding-left: 3%;

    display: block;
    @media (max-width: 450px) {
        font-style: normal;
        max-width: 90%;
        font-size: 10px;
        line-height: 100%;
        text-align: center;
        padding-top: 5%;
        /* display: none; */
   
    }
}
h4{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    text-align: left;
    color: #FFFFFF;
    padding-left: 3%;
    padding-top: 3%;

    span{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        text-align: center;
        color: #555;
        padding-left: 5%;
    }
    @media (max-width: 450px) {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 150%;
        color: #FFFFFF;
        text-align: left;
   
    }
}
`

export const Nextcon = styled.div`
display: flex;
align-items: center;
justify-content: right;
@media (max-width: 450px) {
      
   
    }
`

export const Tcon = styled.div`
cursor: pointer;
max-width: auto;
`

export const Icon = styled.div`
cursor: pointer;
max-width: auto;
`




export const Fromcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: #1e1e1e;
height: 880px;
@media (max-width: 450px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
}

@media (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding-top: 10%;
}

`

export const Leftcon = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: left;
padding-left: 5%;
::placeholder{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #FFFFFF;
    opacity: 0.5;
}
h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFF;

}
.name{
    width: 260px;
    height: 70px;
    background: #212121;
    box-shadow: 4px 11px 26px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 2%;
    font-size: 20px;
    color: #FFFFFF;
    margin-top: 5%;
    border: none;

    /* margin-right: 30%; */

}

textarea{
    width: 499px;
    height: 200px;
    left: 100px;
    top: 3396px;
    background: #212121;
    box-shadow: 4px 11px 26px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 2%;
    font-size: 18px;
    color: #FFFFFF;
    margin-top: 5%;
    border: none;
    font-size: 20px;
@media (max-width: 450px) {
    max-width: 95%;
}
}

.email{
    width: 499px;
    height: 70px;
    background: #212121;
    box-shadow: 4px 11px 26px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 2%;
    font-size: 22px;
    margin-top: 5%;
    border: none;
    @media (max-width: 450px) {
    max-width: 95%;
}
}
button{
    width: 204px;
    height: 69px;
    background: #FF3535;
    border-radius: 50px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: #FFFFFF;
    margin-top: 5%;
    border: none;

@media only screen, (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10%;
}
}

@media (max-width: 450px) {
    max-width: 90%;
   
}
@media only screen, (max-width: 960px) {
    max-width: 90%;
}
`


export const Mapcon = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;

img{


@media (max-width: 450px) {
    max-width: 90%;
    padding-top: 10%;
    
}
}
`




export const Footercon = styled.div`
background: #000;
height: 200px;

img{
    padding-right: 3%;
    padding-top: 2%;
}
h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.2em;
    color: #FFFFFF;
}
`

export const Paragrif = styled.div`
`


