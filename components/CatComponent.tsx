/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styled from 'styled-components'
import cat404 from '../assets/cat404.jpg'
interface ICat {
	cat: {
		id: string
		wikipedia_url: string
		name: string
		image: {
			url: string
			id: string
		}
		description: string
	}
}

const CatContainer = styled.div`
	width: 25rem;
	display: flex;
	flex-direction: column;
	height: 25rem;
	border-radius: 1rem;
	background-color: #fff;
	border: 1px solid #e4e4e4;
	transition: all 0.5s ease;
	&:hover {
		box-shadow: 0 0 8px 5px #bababa;
		background-color: #70f1da;
		transform: scale(1.01);

		button {
			background-color: #fff;
		}
	}
	a {
		text-decoration: none;
	}
	div:first-of-type {
		height: 80%;
		width: 100%;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	div:last-of-type {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
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
`
const CatComponent = ({cat}: ICat) => {
	return (
		<CatContainer>
			<div>
				<img
					src={`${!cat?.image?.url ? cat404 : cat?.image?.url}`}
					alt={cat?.name}
				/>
			</div>
			<div>
				<h3>{cat?.name}</h3>
				<Link href={`/${cat?.image?.id}`}>
					<button>Find out more</button>
				</Link>
			</div>
		</CatContainer>
	)
}

export default CatComponent
