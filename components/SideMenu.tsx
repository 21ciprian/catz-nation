import {BsSearch} from 'react-icons/bs'
import styled from 'styled-components'
import InputComponent from './InputComponent'
import SelectComponent from './SelectComponent'

const Menu = styled.section`
	background-color: #fff;
	width: 22rem;
	height: 100vh;
	padding: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	right: 0;

	div:nth-of-type(1) {
		/* display: none; */

		gap: 1rem;
		@media (min-width: 1080px) {
			display: flex;
			justify-content: center;
		}
		input {
			padding: 0.5rem 0;
			font-size: 1.1rem;
			outline: none;
			border: none;
		}
		select {
			border: none;
			outline: none;
			font-size: 1.1rem;
			padding: 0.5rem;

			cursor: pointer;
		}
		div {
			padding: 0 0.5rem;
			border-bottom: 2px solid #717171;
			display: flex;
			width: max-content;
			align-items: center;
			svg {
				color: #717171;
			}
		}
		button {
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
	return (
		<Menu>
			<div>
				<div>
					<InputComponent
						placeholder='Search by breed...'
						name={name}
						getCatByName={getCatByName}
					/>
					<BsSearch size={'1.5rem'} />
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
			</div>
		</Menu>
	)
}

export default SideMenu
