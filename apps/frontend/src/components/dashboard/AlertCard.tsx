import { CircleAlert, CircleCheck, TriangleAlert } from 'lucide-react'

type Status = 'success' | 'warning' | 'danger'

interface AlertCardProps {
	status: Status
}

const variants: Record<Status, any> = {
	success: {
		styles: {
			container: 'bg-[#111511] border-[#becca3]',
			text: 'text-[#becca3]',
		},
		icon: <CircleCheck />,
		title: 'Consistency Peak',
		text: "You've hit your longest streak ever. Keep the momentum going!",
	},
	danger: {
		styles: {
			container: 'bg-red-900/20 border-red-400',
			text: 'text-red-300',
		},
		icon: <CircleAlert />,
		title: 'Skill Gap Alert',
		text: 'Low activity in System Design. Schedule a 30m review session?',
	},
	warning: {
		styles: {
			container: 'bg-yellow-900/20 border-yellow-400',
			text: 'text-yellow-300',
		},
		icon: <TriangleAlert />,
		title: 'Skill Gap Alert',
		text: 'Low activity in System Design. Schedule a 30m review session?',
	},
}

export const AlertCard: React.FC<AlertCardProps> = ({ status }): React.ReactNode => {
	return (
		<div
			className={`flex items-center gap-2 rounded-r-xl px-4 py-2 w-full border-l-4 ${variants[status].styles.container}`}
		>
			{variants[status].icon}
			<div>
				<h4 className="font-bold">{variants[status].title}</h4>
				<p className={`text-sm ${variants[status].styles.text}`}>{variants[status].text}</p>
			</div>
		</div>
	)
}
