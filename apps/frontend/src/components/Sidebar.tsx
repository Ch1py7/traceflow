import { BookOpenText, ChartArea, Goal, LayoutDashboard, User } from 'lucide-react'
import { Link, useLocation } from 'react-router'

interface SidebarOptionProps {
	route: string
	name: string
	isActive: boolean
	Icon: React.ComponentType<{ width?: number; height?: number }>
}

const SidebarOption: React.FC<SidebarOptionProps> = ({ isActive, name, route, Icon }) => {
	return (
		<Link
			to={route}
			className={`flex items-center gap-2 p-2 rounded-lg ${isActive ? 'bg-[#272c38]' : 'hover:bg-[#272c3850]'}`}
		>
			<Icon width={18} height={18} />
			<p>{name}</p>
		</Link>
	)
}

export const Sidebar = () => {
	const { pathname } = useLocation()
	return (
		<nav className="max-w-60 w-full bg-[#11131a] py-6 px-6 min-h-screen flex flex-col gap-y-16">
			<Link
				to="/profile"
				className={`flex justify-between rounded-lg items-center p-2 ${pathname.includes('profile') ? 'bg-[#272c38]' : 'hover:bg-[#272c3850]'}`}
			>
				<div className="flex flex-col">
					<p className="text-lg font-bold">Gerardo Garcia</p>
					<span className="text-xs text-[#676a74]">TraceFlow 0.1</span>
				</div>
				<User width={24} height={24} />
			</Link>
			<div className="flex flex-col gap-2">
				<SidebarOption
					Icon={LayoutDashboard}
					isActive={pathname.includes('dashboard')}
					name="Dashboard"
					route="/dashboard"
				/>
				<SidebarOption
					Icon={ChartArea}
					isActive={pathname.includes('tech-analysis')}
					name="Tech Analysis"
					route="/tech-analysis"
				/>
				<SidebarOption
					Icon={BookOpenText}
					isActive={pathname.includes('learning-log')}
					name="Learning Log"
					route="/learning-log"
				/>
				<SidebarOption
					Icon={Goal}
					isActive={pathname.includes('goal')}
					name="Goals"
					route="/goals"
				/>
			</div>
		</nav>
	)
}
