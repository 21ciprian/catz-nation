/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import {useRouter} from 'next/router'

interface ICat {
	description: string
	life_span: string
	name: string
	origin: string
	temperament: string
	weight: {metric: string}
	wikipedia_url: string
}
interface IBreeds {
	data: {breeds: ICat[]; url: string}
}
interface IParams {
	params: {
		image_id: string
	}
}
export async function getServerSideProps({params}: IParams) {
	const response = await fetch(
		`https://api.thecatapi.com/v1/images/${params.image_id}`
	)
	const data = await response.json()

	return {props: {data}}
}
const Cat = ({data}: IBreeds) => {
	const router = useRouter()
	console.log('router.query:', router.query.cat)
	console.log('cat: ', data)
	return (
		<div>
			<img src={data?.url} alt={data?.breeds[0]?.name} />
			<h3>{data?.breeds[0]?.name}</h3>
			<p>{data?.breeds[0]?.description}</p>
			<div>
				<p>Weight (kg): {data?.breeds[0]?.weight?.metric}</p>
				<p>Lifespan (years): {data?.breeds[0]?.life_span}</p>
			</div>
			<p>Origin: {data?.breeds[0]?.origin}</p>

			<Link href='/'>Go Back</Link>
		</div>
	)
}

export default Cat
