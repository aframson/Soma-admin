import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MerchantSidebar } from '../../components';
import { getSpecificMechants } from '../../config';
import { BiArrowBack } from 'react-icons/bi';
import Image from 'next/image';
function merchantData() {
	//default variables
	const Router = useRouter();
	const { merchantId } = Router.query;

	//states
	const [data, setData] = useState([]);
	const [approved, setApproved] = useState('Approve');

	useEffect(() => {
		getSpecificMechants({ merchantId }).then(res => {
			console.log(res[0]);
			setData(res[0]);
			if (res[0].approved) {
				setApproved('Approved');
			} else {
				setApproved('Approve');
			}
		});
	}, []);

	return (
		<div className='max-h-screen overflow-hidden'>
			<div className='flex'>
				<MerchantSidebar />
				<div className='w-full bg-gray-50'>
					<header className='bg-white shadow'>
						<div className=' mx-auto py-6 px-8 sm:px-6 lg:px-8 flex'>
							<BiArrowBack
								color={'black'}
								size={27}
								onClick={e =>
									Router.push('/merchant')
								}
							/>{' '}
							{/* <h3  className='px-2 text-2xl'>Go Back</h3> */}
						</div>
					</header>
					{data.id ? (
						<main className='max-h-screen overflow-y-auto flex'>
							<div className=' w-9/12 flex flex-col py-6 sm:px-6 '>
								<div className='py-2 pl-4 w-full flex justify-start'></div>
								<div className='w-full h-full rounded-lg shadow bg-white'>
									<div className='w-full h-48 bg-gray-100 rounded-tl-lg rounded-tr-lg'>
										{/* <img src={data.storeBanner} alt=''  className='w-full h-full '/> */}
									</div>
									<div className='w-40 h-40 -mt-20 ml-10 border-4 border-white shadow-sm relative rounded-full'>
										<Image
											src={
												data.storeBanner
											}
											alt={
												data.storeBanner
											}
											layout='fill'
											objectFit='contain'
											className=' rounded-full'
										/>
									</div>
									<div className='w-full h-full mx-10 grid grid-cols-2 gap-4'>
										<div className='w-full h-full ml-4 py-2'>
											<h3 className='text-2xl font-sans font-medium text-slate-700'>
												{' '}
												{
													data.businessName
												}
											</h3>
											<h3 className='text-lg font-sans font-normal text-slate-700'>
												{' '}
												{
													data.establishment
												}
											</h3>
											<h3 className='text-sm font-sans font-normal text-slate-400'>
												{' '}
												{
													data.institution
												}{' '}
												<span className='text-blue-500 font-medium text-decoration-line cursor-pointer'>
													.
													Contact
													Info
												</span>
											</h3>
											<button
												className={`${
													data.approved
														? 'bg-blue-500 text-white'
														: 'bg-white border-2 border-blue-500 text-blue'
												} flex justify-center items-center w-36  h-12 my-4 rounded-full`}
											>
												{
													approved
												}
											</button>
										</div>
										<div className='w-full h-full ml-4 py-2'>
											<h3 className='text-2xl font-sans font-medium text-slate-700 '>
												{' '}
												Description
											</h3>
											<h3 className='w-1/2 text-sm font-sans font-normal text-slate-400'>
												{' '}
												{
													data.description
												}{' '}
											</h3>
										</div>
									</div>
								</div>
							</div>
							<div className='w-4/12  flex flex-col py-6 sm:px-6'>
								<div className='py-2  w-full flex justify-start'></div>
								<div className='w-full h-full rounded-lg  border border-gray-100 shadow bg-white'></div>
							</div>
						</main>
					) : (
						<div>loading...</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default merchantData;
