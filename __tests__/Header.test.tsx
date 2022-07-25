import {render, screen} from '@testing-library/react'
import Header from '../components/Header'
// import App from '../pages/index'
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
			getFact={function (): void {
				throw new Error('Function not implemented.')
			}}
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
})
