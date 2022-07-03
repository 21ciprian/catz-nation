interface IFact {
	fact: string
}

const FactComponent = ({fact}: IFact) => {
	return <p>{fact}</p>
}

export default FactComponent
