import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '../components/InputComponent'
const getCatByName = jest.fn()
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
	it('Should render the correct text', async () => {
		render(
			<Input
				name={'ccc'}
				placeholder={'search by breed'}
				getCatByName={getCatByName} //
			/>
		)
		const input = await screen.findByPlaceholderText(/search by breed/i)

		await userEvent.type(screen.getByPlaceholderText(/search by breed/i), 'Cat')
		console.log({input})
		expect(getCatByName).toHaveBeenCalledTimes(3)
		// expect(input).toHaveValue('Cat')
	})
})
