import { RouterProvider } from 'react-router'
import { router } from './routes'
import { useTheme } from './hooks/useTheme'

export const App = () => {
	useTheme()
	return <RouterProvider router={router} />
}
