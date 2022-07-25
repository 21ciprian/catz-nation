import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input from '../components/InputComponent'
const setup = () => {
	const getCat = jest.fn()
	return render(
		<Input
			name={''}
			placeholder={''}
			getCatByName={function (str: string): void {
				throw new Error('Function not implemented.')
			}}
			// getCatByName={(e: any) => getCat(e.target.value)}
		/>
	)
}

describe('Input Component', () => {
	it('Render search input', () => {
		setup()
		const input = screen.getByRole('textbox')
		expect(input).toBeInTheDocument()
	})
	it('Should render the correct text', () => {
		setup()
		const getCat = jest.fn()
		const input = screen.getByRole('textbox')

		userEvent.type(input, 'Cat')
		console.log({input})
		expect(input).toBe('Cat')
	})
})
