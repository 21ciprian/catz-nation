import OptionComponent from './OptionComponent'
interface ISelect {
	text: string
	value: string
	optionsArray: string[]
	handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectComponent = ({
	text,
	value,
	optionsArray,
	handleChange
}: ISelect) => {
	return (
		<select value={value} onChange={handleChange}>
			<option value=''>{text}</option>
			{optionsArray?.map(o => (
				<OptionComponent key={o} value={o} option={o} />
			))}
		</select>
	)
}

export default SelectComponent
