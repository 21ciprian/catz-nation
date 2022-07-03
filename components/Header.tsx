import {BsSearch} from 'react-icons/bs'
import styled from 'styled-components'
import InputComponent from '../components/InputComponent'
import SelectComponent from '../components/SelectComponent'

const Header = styled.header`
	background-color: #fff;
	width: 100%;
	padding: 2rem 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	h1 {
		font-weight: 500;
	}

	div {
		width: 60%;
		display: flex;

		justify-content: center;
		gap: 1rem;
		input {
			padding: 0.5rem 0;
			/* width: 20rem; */
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
			/* padding: 0.5rem; */
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
	setFilteredCats: (str: any) => void
	setCatsOrigin: (str: any) => void
	setCatsLifeSpan: (str: any) => void
	setCatsWeight: (str: any) => void
	getCatByName: (str: string) => void
	getCatByOrigin: (e: string) => void
	getCatByLifeSpan: (e: string) => void
	getCatByWeight: (e: string) => void
	getFact: () => void
	catsOrigin: string
	catsLifeSpan: string
	catsWeight: string
	weight: string[]
	name: string
	origin: string[]
	lifespan: string[]
}

const HeaderComponent = ({
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
	getFact
}: IProps) => {
	return (
		<Header>
			<h1>
				Catz.<em>Nation</em>
			</h1>
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
				<button onClick={getFact}>Get cat fact</button>
			</div>
		</Header>
	)
}

export default HeaderComponent
