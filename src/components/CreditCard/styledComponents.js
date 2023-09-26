import Styled from 'styled-components'

export const BgContainer = Styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
background-color:black;
`
export const CardContainer = Styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
background-color: #344e7a;
width:40vw;
padding:10px;
`

export const DetailContainer = Styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:40vw;
padding:10px;
background-color:white;
`
export const H1 = Styled.h1`
text-align:center;
color:#ffffff;
`
export const Hr = Styled.hr`
width:200px;
border:2px solid #ffd773;
margin-top:-10px;
`
export const CardImageContainer = Styled.div`
margin-top:40px;
background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
background-size:cover;
height:300px;
border-radius:24px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
padding-left:50px;
color:white;
`
export const CardNumber = Styled.p`
font-size:40px;
font-width:bold;
`
export const HolderName = Styled.p`
font-width:bold;
font-size:25px;
margin-top:-10px;
`
export const CardDetail = Styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding:20px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:20px;
border-radius:10px;
width:70%;
`
export const Input = Styled.input`
border:1px solid #d3d9e0;
width:250px;
padding:10px;
color: #475569;
`
export const PaymentHead = Styled.h1`
color:#475569;
`
