interface IOption {
	value: string
	option: string
}

const OptionComponent = ({value, option}: IOption) => {
	return <option value={value}>{option}</option>
}

export default OptionComponent
