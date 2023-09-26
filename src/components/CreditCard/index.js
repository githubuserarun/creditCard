import {useState} from 'react'
import {
  BgContainer,
  CardContainer,
  DetailContainer,
  CardImageContainer,
  H1,
  Hr,
  CardNumber,
  HolderName,
  CardDetail,
  Input,
  PaymentHead,
} from './styledComponents'

const CreditCard = () => {
  const [cardNum, setCardNum] = useState('')
  const [holderName, setHolder] = useState('')

  const onChangeCardNumber = event => {
    setCardNum(event.target.value)
    console.log(cardNum)
  }

  const onChangeHolderName = event => {
    setHolder(event.target.value)
  }

  return (
    <BgContainer>
      <CardContainer>
        <div>
          <H1>CREDIT CARD</H1>
          <Hr />
        </div>

        <CardImageContainer data-testid="creditCard">
          <CardNumber>{cardNum}</CardNumber>
          <p>CARDHOLDER NAME</p>
          <HolderName>{holderName}</HolderName>
        </CardImageContainer>
      </CardContainer>
      <DetailContainer>
        <CardDetail>
          <PaymentHead>Payment Method</PaymentHead>
          <Input
            type="text"
            placeholder="Card Number"
            onChange={onChangeCardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeHolderName}
          />
        </CardDetail>
      </DetailContainer>
    </BgContainer>
  )
}
export default CreditCard
