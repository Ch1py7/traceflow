import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export const useTheme = () => {
	const [currentTheme, setCurrentTheme] = useState<Theme>('light')

	const applyTheme = useCallback((theme: Theme) => {
		document.documentElement.classList.remove('theme-light', 'theme-dark')

		document.documentElement.classList.add(`theme-${theme}`)

		if (['dark', 'ocean', 'forest'].includes(theme)) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [])

	const changeTheme = useCallback(
		(theme: Theme) => {
			setCurrentTheme(theme)
			applyTheme(theme)
			localStorage.setItem('traceflow_theme', theme)
		},
		[applyTheme]
	)

	useEffect(() => {
		if (document.documentElement.classList.contains('theme-light')) setCurrentTheme('light')
		else if (document.documentElement.classList.contains('theme-dark')) setCurrentTheme('dark')
	}, [])

	const theme = localStorage.getItem('traceflow_theme') as Theme

	useEffect(() => {
		if (theme !== null) {
			changeTheme(theme)
		} else {
			localStorage.setItem('traceflow_theme', 'dark')
		}
	}, [theme, changeTheme])

	return {
		currentTheme,
		setCurrentTheme,
		changeTheme,
	}
}
