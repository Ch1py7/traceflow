import { Sidebar } from './Sidebar'

interface LayoutProps {
	children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }): React.ReactNode => {
	return (
		<div className="flex bg-[#0c0e14]">
			<Sidebar />
			{children}
		</div>
	)
}
