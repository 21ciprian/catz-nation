/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

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

const CatComponent = ({cat}: ICat) => {
	return (
		<div>
			<a href={cat?.wikipedia_url} target='_blank' rel='noreferrer'>
				<h3>{cat?.name}</h3>
			</a>
			<Link href={`/${cat?.image?.id}`}>
				<img src={cat?.image?.url} alt={cat?.name} />
			</Link>
			<p>{cat?.description}</p>
		</div>
	)
}

export default CatComponent
