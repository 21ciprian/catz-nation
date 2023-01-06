import {fireEvent, render, screen} from '@testing-library/react'
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

beforeEach(() => {
	jest.resetAllMocks()
})
describe('Input Component', () => {
	it('Render search input', () => {
		setup()
		const input = screen.getByRole('textbox')
		expect(input).toBeInTheDocument()
	})
	it('Should call getCatByName function when user types in the input field', async () => {
		const mockGetCatByName = getCatByName as jest.Mock
		render(
			<Input
				name={''}
				placeholder={'search by breed'}
				getCatByName={mockGetCatByName} //
			/>
		)
		const view = userEvent.setup()
		const input = screen.getByPlaceholderText(/search by breed/i)

		fireEvent.change(input, {target: {value: 'Cat'}})
		expect(mockGetCatByName).toHaveBeenCalled()
		expect(mockGetCatByName).toHaveBeenCalledWith('Cat')
	})
})
