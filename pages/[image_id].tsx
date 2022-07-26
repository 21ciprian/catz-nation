/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import {useRouter} from 'next/router'
import styled from 'styled-components'

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
const CatContainer = styled.article`
	width: 90%;
	height: 100%;
	/* padding: 1rem; */
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem auto;
	border: 1px solid #e4e4e4;
	border-radius: 1rem;
	transition: all 0.5s ease;
	@media (min-width: 760px) {
		max-width: 35rem;
	}

	&:hover {
		box-shadow: 0 0 8px 5px #bababa;
		/* background-color: #70f1da; */
		transform: scale(1.01);
		div:nth-of-type(2) {
			div {
				p {
					background-color: #fff;
				}
			}
		}
	}
	h4 {
		text-align: center;
		width: 100%;
		text-decoration: underline;
		margin-bottom: 1rem;
		margin-top: 1rem;
	}
	section:first-of-type {
		width: 100%;
		height: 20rem;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: 20% 20%;
			border-top-left-radius: 1rem;
			border-top-right-radius: 1rem;
		}
	}
	div:first-of-type {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		h3 {
			/* flex: 0.6; */
			margin-left: 1rem;
		}
		div:first-of-type {
			display: flex;
			/* flex: 0.5; */
			width: max-content;

			/* border: 1px solid black; */
			justify-content: flex-end;
			padding: 1rem;
			gap: 1rem;
			p {
				border-top-left-radius: 50rem;
				border-top-right-radius: 50rem;
				border-bottom-left-radius: 50rem;
				border-bottom-right-radius: 50rem;
				border: none;
				outline: none;
				background-color: #70f1da;
				cursor: pointer;
				padding: 0.5rem 1rem;
				font-size: 0.9rem;
				font-weight: 700;
				color: #000;
				transition: all 0.5s ease;
				&:hover {
					background-color: #038c73;
					color: #fff;
				}
			}
			a {
				text-decoration: none;
			}
		}
	}
`
const Description = styled.p`
	padding: 1rem;
	background-color: #f7f7f7;
`
const Stats = styled.section`
	padding: 1rem;
	background-color: #f16ff1;

	display: flex;
	justify-content: space-between;
	width: 100%;
	li {
		list-style: none;
	}
	div {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}
	div:first-of-type {
		/* flex: 0.5; */
		margin-left: -3.5em;
	}
`
const ImgDiv = styled.div``
export async function getServerSideProps({params}: IParams) {
	const response = await fetch(
		`https://api.thecatapi.com/v1/images/${params?.image_id}`
	)
	const data = await response.json()

	return {props: {data}}
}
const Cat = ({data}: IBreeds) => {
	const router = useRouter()
	// console.log('router.query:', router?.query?.cat)
	console.log('cat: ', data)
	return (
		<CatContainer>
			{!data.breeds[0] ? (
				<p>No data</p>
			) : (
				<>
					<section>
						<img src={data?.url} alt={data?.breeds[0]?.name} />
					</section>
					<div>
						<h3>{data?.breeds[0]?.name}</h3>
						<div>
							<Link href='/'>
								<p>Go Back</p>
							</Link>
							<a
								href={data?.breeds[0]?.wikipedia_url}
								target='_blank'
								rel='noreferrer'>
								<p>Wiki..</p>
							</a>
						</div>
					</div>
					<Description>{data?.breeds[0]?.description}</Description>
					<Stats>
						<div>
							<h4>Qualities:</h4>
							<ul>
								{data?.breeds[0]?.temperament.split(', ').map(q => (
									<li key={q}>• {q}</li>
								))}
							</ul>
						</div>
						<div>
							<h4>Other stats:</h4>
							<ul>
								<li>• Weight (kg): {data?.breeds[0]?.weight?.metric}</li>
								<li>• Lifespan (years): {data?.breeds[0]?.life_span}</li>
								<li>• Origin: {data?.breeds[0]?.origin}</li>
							</ul>
						</div>
					</Stats>
				</>
			)}
		</CatContainer>
	)
}

export default Cat
