import styled from 'styled-components'
import InputComponent from './InputComponent'
import SelectComponent from './SelectComponent'

const Menu = styled.section`
	background-color: rgba(8, 8, 8, 0.673);
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

	/* display: none; */

	gap: 1rem;
	@media (min-width: 1080px) {
		display: none;
		/* justify-content: center; */
	}
	input {
		padding: 0.5rem;
		font-size: 1.1rem;
		outline: none;
		border: none;
		width: 100%;
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
		/* border-bottom: 2px solid #717171; */
		background-color: #fff;

		display: flex;
		/* width: max-content; */
		align-items: center;
		svg {
			color: #717171;
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
	return (
		<Menu>
			<div>
				<InputComponent
					placeholder='Search by breed...'
					name={name}
					getCatByName={getCatByName}
				/>
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
