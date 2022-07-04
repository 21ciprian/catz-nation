interface IFact {
	fact: string
}
import styled from 'styled-components'
const FactText = styled.p`
	width: 100%;
	min-height: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f16ff1;
	padding: 1rem 6rem;
	color: #fff;
	font-weight: 700;
	font-size: 1.1rem;
`
const FactComponent = ({fact}: IFact) => {
	return <FactText>{fact}</FactText>
}

export default FactComponent
