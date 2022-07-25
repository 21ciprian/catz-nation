import {BsSearch} from 'react-icons/bs'
import styled from 'styled-components'
import InputComponent from './InputComponent'
import SelectComponent from './SelectComponent'

type TMenu = {
	open: boolean
}
const Menu = styled.section<TMenu>`
	background-color: rgba(8, 8, 8, 1);
	width: 100vw;
	height: 100vh;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	right: 0;
	transform: translateX(${props => (props.open ? '0' : '100vw')});
	transition: all 1s ease;

	gap: 1rem;
	@media (min-width: 1080px) {
		display: none;
	}

	select {
		border: none;
		outline: none;
		font-size: 1.1rem;
		padding: 0.5rem;
		width: 20rem;
		cursor: pointer;
	}
	div {
		width: 20rem;
		padding-right: 0.5rem;
		background-color: #fff;
		display: flex;
		align-items: center;
		input {
			padding: 0.5rem;
			font-size: 1.1rem;
			outline: none;
			border: none;
			width: 100%;
		}
		svg {
			color: #717171;
			cursor: pointer;
		}
	}
	button {
		width: 20rem;

		padding: 0.5rem 1rem;
		font-size: 1.1rem;
		border-top-left-radius: 50rem;
		border-top-right-radius: 50rem;
		border-bottom-left-radius: 50rem;
		border-bottom-right-radius: 50rem;
		border: none;
		outline: none;
		background-color: #70f1da;
		cursor: pointer;
	}
`

export interface IProps {
	getCatByName: (str: string) => void
	getCatByOrigin: (e: string) => void
	getCatByLifeSpan: (e: string) => void
	getCatByWeight: (e: string) => void
	setMenuOpen: (arg: boolean) => void
	getFact: () => void
	menuOpen: boolean
	catsOrigin: string
	catsLifeSpan: string
	catsWeight: string
	weight: string[]
	name: string
	origin: string[]
	lifespan: string[]
}

const SideMenu = ({
	catsOrigin,
	catsLifeSpan,
	catsWeight,
	name,
	origin,
	lifespan,
	weight,
	getCatByName,
	getCatByOrigin,
	getCatByLifeSpan,
	getCatByWeight,
	setMenuOpen,
	menuOpen,
	getFact
}: IProps) => {
	const hideSideMenu = () => {
		getCatByName(name)
		setMenuOpen(false)
	}
	return (
		<Menu open={menuOpen}>
			<div>
				<InputComponent
					placeholder='Search by breed...'
					name={name}
					getCatByName={getCatByName}
				/>
				<BsSearch onClick={hideSideMenu} size={'1.5rem'} />
			</div>
			<SelectComponent
				optionsArray={origin}
				value={catsOrigin}
				text='Origin'
				handleChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
					getCatByOrigin(event.target.value)
				}
			/>
			<SelectComponent
				optionsArray={lifespan}
				value={catsLifeSpan}
				text='Lifespan (years)'
				handleChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
					getCatByLifeSpan(event.target.value)
				}
			/>
			<SelectComponent
				optionsArray={weight}
				value={catsWeight}
				text='Weight (kg)'
				handleChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
					getCatByWeight(event.target.value)
				}
			/>
			<button onClick={getFact}>Get a cat fact</button>
		</Menu>
	)
}

export default SideMenu
