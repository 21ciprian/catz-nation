/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import {useState} from 'react'
import styled from 'styled-components'
import CatComponent from '../components/CatComponent'
import Fact from '../components/FactComponent'
import Header from '../components/Header'
import {
	filterCatsByLifespan,
	filterCatsByName,
	filterCatsByOrigin,
	filterCatsByWeight,
	generateLifespanArray,
	generateOriginArray,
	generateWeightArray
} from '../utils'
export interface ICat {
	cat: any
	adaptability: number
	affection_level: number
	child_friendly: number
	energy_level: number
	dog_friendly: number
	id: string
	description: string
	intelligence: number
	name: string
	image: {
		url: string
		id: string
	}
	life_span: string
	origin: string
	temperament: string
	weight: {
		metric: string
	}
	wikipedia_url: string
}
interface IHome {
	n: string
	data: ICat[]
}

const CatContainer = styled.section`
	width: 90%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 2rem;
	margin: 2rem auto;
	padding: 1rem;
	/* border: 2px solid red; */
`
const Home = ({data}: IHome) => {
	const [fact, setFact] = useState<string>(
		'One reason that kittens sleep so much is because a growth hormone is released only during sleep.'
	)
	const [name, setName] = useState<string>('')
	const [filteredCats, setFilteredCats] = useState<ICat[]>([])
	const [catsOrigin, setCatsOrigin] = useState<string>('')
	const [catsLifeSpan, setCatsLifeSpan] = useState<string>('')
	const [catsWeight, setCatsWeight] = useState<string>('')

	//generate arrays for filtering cat objects
	const origin = generateOriginArray(data)
	const lifespan = generateLifespanArray(data)
	const weight = generateWeightArray(data)

	//filter cats by name when user types in the input field
	const getCatByName = (name: string) => {
		setName(name)
		const filterred = filterCatsByName(data, name)

		setFilteredCats(filterred)
	}
	//filter cats by origin when user chooses an option

	const getCatByOrigin = (origin: string) => {
		setCatsOrigin(origin)
		const filterred = filterCatsByOrigin(data, origin)

		setFilteredCats(filterred)
		console.log({filterred})
		setCatsOrigin('Origin')
	}
	//filter cats by lifespan when user chooses an option

	const getCatByLifeSpan = (lifespan: string) => {
		setCatsLifeSpan(lifespan)
		const filterred = filterCatsByLifespan(data, lifespan)

		setFilteredCats(filterred)
		console.log({filterred})
		setCatsLifeSpan('Lifespan (years)')
	}
	//filter cats by weight when user chooses an option

	const getCatByWeight = (weight: string) => {
		setCatsWeight(weight)
		const filterred = filterCatsByWeight(data, weight)

		setFilteredCats(filterred)
		console.log({filterred})
		setCatsWeight('Weight (kg)')
	}

	const getFact = async () => {
		const res = await fetch(`https://catfact.ninja/fact`)
		const f = await res.json()
		setFact(f?.fact)
	}

	return (
		<div style={{overflow: 'hidden'}}>
			<Head>
				<title>CatzNation</title>
				<meta
					name='description'
					content='CatzNation app, generated by create next app to display various cats'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header
				catsOrigin={catsOrigin}
				catsLifeSpan={catsLifeSpan}
				catsWeight={catsWeight}
				getCatByName={getCatByName}
				getCatByOrigin={getCatByOrigin}
				getCatByLifeSpan={getCatByLifeSpan}
				getCatByWeight={getCatByWeight}
				name={name}
				origin={origin}
				lifespan={lifespan}
				weight={weight}
				getFact={getFact}
			/>

			{fact && <Fact fact={fact} />}
			<CatContainer>
				{filteredCats
					? filteredCats?.map(cat => <CatComponent key={cat?.id} cat={cat} />)
					: data?.map(cat => <CatComponent key={cat?.id} cat={cat} />)}
			</CatContainer>
		</div>
	)
}

export async function getServerSideProps() {
	const response = await fetch(`https://api.thecatapi.com/v1/breeds`)
	const data = await response.json()

	return {props: {data}}
}

export default Home
