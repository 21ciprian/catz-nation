import styled from 'styled-components'

interface IProps {
	menuOpen: boolean
	setMenuOpen: (arg: boolean) => void
}
interface ISpan {
	open?: any
}
const Wrapper = styled.div`
	width: 2rem;
	height: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;
	@media (min-width: 1080px) {
		display: none;
	}
`
const Span = styled.span<ISpan>`
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
		opacity: ${(props: any) => (props.open ? 0 : 1)};
	}
	&:first-of-type {
		transform: rotate(${(props: any) => (props.open ? '42deg' : '')});
	}
	&:last-of-type {
		transform: rotate(${(props: any) => (props.open ? '-42deg' : '')});
	}
`
const Hamburger = ({menuOpen, setMenuOpen}: IProps) => {
	return (
		<Wrapper onClick={() => setMenuOpen(!menuOpen)}>
			<Span open={menuOpen}></Span>
			<Span open={menuOpen}></Span>
			<Span open={menuOpen}></Span>
		</Wrapper>
	)
}

export default Hamburger
