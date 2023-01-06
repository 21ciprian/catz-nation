import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '../components/InputComponent'
const getCatByName = jest.fn((str: string) => str)
const setup = () => {
	return render(
		<Input
			name={''}
			placeholder={''}
			getCatByName={getCatByName} //
		/>
	)
}

describe('Input Component', () => {
	it('Render search input', () => {
		setup()
		const input = screen.getByRole('textbox')
		expect(input).toBeInTheDocument()
	})
	it('Should call getCatByName function when user types in the input field', async () => {
		render(
			<Input
				name={''}
				placeholder={'search by breed'}
				getCatByName={getCatByName} //
			/>
		)
		const input = screen.getByPlaceholderText(/search by breed/i)

		await userEvent.type(input, 'Cat')
		expect(getCatByName).toHaveBeenCalled()
		console.log({input})
		// expect(input).toHaveValue('Cat')
	})
})
