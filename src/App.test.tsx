import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'


describe('FieldTypeSelector', () => {
  test('does not truncate text if it fits the given space', async () => {
    const user = userEvent.setup()

    render(<App />)

    expect(
      screen.getByRole('button', { name: 'Open Menu' }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open Menu' }))

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    screen.debug(undefined, 100000)
  })
})
