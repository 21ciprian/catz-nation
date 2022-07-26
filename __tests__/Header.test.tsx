import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '../components/Header'
const mockCatFact = jest.fn()
const setup = () => {
	return render(
		<Header
			getCatByName={function (str: string): void {
				throw new Error('Function not implemented.')
			}}
			getCatByOrigin={function (e: string): void {
				throw new Error('Function not implemented.')
			}}
			getCatByLifeSpan={function (e: string): void {
				throw new Error('Function not implemented.')
			}}
			getCatByWeight={function (e: string): void {
				throw new Error('Function not implemented.')
			}}
			setMenuOpen={function (arg: boolean): void {
				throw new Error('Function not implemented.')
			}}
			getFact={mockCatFact}
			menuOpen={false}
			catsOrigin={''}
			catsLifeSpan={''}
			catsWeight={''}
			weight={[]}
			name={''}
			origin={[]}
			lifespan={[]}
		/>
	)
}

describe('HeaderComponent', () => {
	it('Render logo', () => {
		setup()
		const logo = screen.getByRole('heading', {name: /catz/i})
		expect(logo).toBeInTheDocument()
	})
	it('Should render search input', () => {
		setup()
		const searchInput = screen.getByPlaceholderText(/search by breed/i)
		expect(searchInput).toBeInTheDocument()
		expect(searchInput).toHaveValue('')
	})
	it('Should render select origin', () => {
		setup()
		const selectOrigin = screen.getByText(/origin/i)
		expect(selectOrigin).toBeInTheDocument()
	})
	it('Should render select lifespan', () => {
		setup()
		const selectLifeSpan = screen.getByText(/lifespan/i)
		expect(selectLifeSpan).toBeInTheDocument()
	})
	it('Should render select weight', () => {
		setup()
		const selectWeight = screen.getByText(/weight/i)
		expect(selectWeight).toBeInTheDocument()
	})
	it('Should render get cat fact button', () => {
		setup()
		const getFactBtn = screen.getByText(/get a cat/i)
		expect(getFactBtn).toBeInTheDocument()
	})
	it('Should call get cat fact function when button is clicked', async () => {
		setup()
		const getFactBtn = screen.getByText(/get a cat/i)
		await userEvent.click(getFactBtn)
		expect(mockCatFact).toHaveBeenCalled()
	})
})
