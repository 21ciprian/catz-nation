import React from 'react'

interface IInput {
	name: string
	placeholder: string
	getCatByName: (str: string) => void
}

const InputComponent = ({name, getCatByName, placeholder}: IInput) => {
	return (
		<input
			placeholder={placeholder}
			type='text'
			value={name}
			onChange={(e: React.FormEvent<HTMLInputElement>) =>
				getCatByName(e.currentTarget.value)
			}
		/>
	)
}

export default InputComponent
