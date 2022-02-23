import { MerchantData, MerchantSidebar } from '../../components';

export default function Merchant() {

	return (
		<>
			<div className='min-h-full'>
				
				<div className='flex'>
					<MerchantSidebar />
					<div className='w-full'>
						<header className='bg-white shadow'>
							<div className=' mx-auto py-6 px-4 sm:px-6 lg:px-8'>
								<h1 className='text-3xl font-bold text-gray-900'>
									Merchant Dashboard
								</h1>
							</div>
						</header>
						<main>
							<div className=' mx-auto py-6 sm:px-6 lg:px-8'>
								<MerchantData />
							</div>
						</main>
					</div>
				</div>
			</div>
		</>
	);
}
