import { AlertCard } from '@/components/dashboard/AlertCard'
import { Layout } from '@/components/Layout'
import { Flame } from 'lucide-react'

export const Dashboard = (): React.ReactNode => {
	return (
		<Layout>
			<main className="flex flex-col py-8 px-4 w-full gap-8">
				<header className="flex justify-between items-center">
					<div>
						<h1 className="text-4xl">Welcome back, Gerardo</h1>
						<p className="text-secondary">
							Your workspace is optimized. You're in the top 5% of consistent learners this week.
						</p>
					</div>
					<div className="flex flex-col items-center justify-center bg-card rounded-xl px-4 py-2">
						<h3 className="uppercase">current streak</h3>
						<span className="flex items-center font-bold text-2xl gap-1">
							<Flame width={24} height={24} /> 15
						</span>
					</div>
				</header>
				<div className="flex justify-between gap-4">
					<AlertCard status="success" />
					<AlertCard status="warning" />
				</div>
			</main>
		</Layout>
	)
}
