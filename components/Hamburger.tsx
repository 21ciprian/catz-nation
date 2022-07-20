import styled from 'styled-components'

interface IProps {
	menuOpen: boolean
	setMenuOpen: (arg: boolean) => void
}
const Wrapper = styled.div`
	width: 2rem;
	height: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;
`
const Span = styled.span`
	width: 100%;
	height: 0.18rem;
	background-color: #000;
	border-top-right-radius: 5rem;
	border-top-left-radius: 5rem;
	border-bottom-right-radius: 5rem;
	border-bottom-left-radius: 5rem;
	transform-origin: left;
	transition: all 1s ease;
	&:nth-of-type(2) {
		/* opacity: ${props => (props ? 0 : 1)}; */
	}
	&:first-of-type {
		/* transform: rotate(${props => (props ? '42deg' : '')}); */
	}
	&:last-of-type {
		/* transform: rotate(${props => (props ? '-42deg' : '')}); */
	}
`
const Hamburger = ({menuOpen, setMenuOpen}: IProps) => {
	return (
		<Wrapper onClick={() => setMenuOpen(!menuOpen)}>
			<Span></Span>
			<Span></Span>
			<Span></Span>
		</Wrapper>
	)
}

export default Hamburger
