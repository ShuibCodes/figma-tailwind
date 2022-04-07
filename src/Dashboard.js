 /* eslint-disable */ 
import SmallCards from './SmallCards';
import Cards from './Cards';
import Tabs from './Tabs';
import Banner from './Banner';
import RightPanel from './RightPanel';

export default function Dashboard() {
	return (
		<div style={{ backgroundColor: '#111827' }} className="">
			<div className="py-2 ">
				<div>
					{/* Banner & Right Panel */}

					<div className="md:grid grid-rows-1 grid-flow-col gap-1">
						<div className="py-6 rounded-2xl">
							<Banner />

							<div className="flex space-x-1 items-center">
								<h4 style={{ fontSize: '26px' }} className="text-white md:ml-6 md:pl-6 md:px-3">
									Popular Collection
								</h4>
								<div className="ml-10">
									<Tabs />
								</div>
							</div>

							<SmallCards />
							<div className="panel-mobile md:hidden">
								<RightPanel />
							</div>

							<div className="flex space-x-1 py-6 items-center">
								<h4 style={{ fontSize: '26px' }} className="text-white md:ml-12 md:px-3">
									Hot Collection
								</h4>
								<div className="ml-10">
									<Tabs />
								</div>
							</div>
							<div className="xl:relative right-12">
								<Cards />
							</div>
						</div>
						<div className="hidden md:block md:relative right-12">
							<RightPanel />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
