/* This example requires Tailwind CSS v2.0+ */
import { PartnerSidebar } from '../../components';



export default function Partner() {
   

	return (
		<>
			<div className='min-h-full'>
				
				<div className='flex'>
					<PartnerSidebar />
					<div className='w-full'>
						<header className='bg-white shadow'>
							<div className=' mx-auto py-6 px-4 sm:px-6 lg:px-8'>
								<h1 className='text-3xl font-bold text-gray-900'>
									Partner Dashboard
								</h1>
							</div>
						</header>
						<main>
							<div className=' mx-auto py-6 sm:px-6 lg:px-8'>
								{/* <div className='px-4 py-6 sm:px-0'>
									<div className='border-4 border-dashed border-gray-200 rounded-lg h-96' />
								</div> */}
							</div>
						</main>
					</div>
				</div>
			</div>
		</>
	);
}
