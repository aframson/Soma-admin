import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MerchantSidebar } from '../../components';
import { getSpecificMechants } from '../../config';
import { BiArrowBack } from 'react-icons/bi';
import Image from 'next/image';
import {
	ApproveMerchant,
	DissapproveMerchant,
} from '../../config';

function MerchantData() {
	//default variables
	const Router = useRouter();
	const { merchantId } = Router.query;
	const Perterns_Table = 'partners';

	//states
	const [data, setData] = useState([]);
	const [approved, setApproved] = useState('Approve');
	const [approve, setApprove] = useState(false);

	useEffect(() => {
		const merchantData = JSON.parse(localStorage.getItem('merchant'));
		setData(merchantData);
		console.log('data', merchantData);
		merchantData.approved
			? (setApproved('Disapprove'), setApprove(true))
			: (setApproved('Approve'), setApprove(false));
	}, [merchantId]);

	const runUpdateFunc = () => {
		if (approve) {
			DissapproveMerchant(merchantId);
			setApproved('Approve');
			setApprove(false);
		} else {
			ApproveMerchant(merchantId);
			setApproved('Disapprove');
			setApprove(true);
		}
	};
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
								onClick={e => (
									Router.push('/merchant'),
									localStorage.removeItem(
										'merchant',
									)
								)}
							/>{' '}
							{/* <h3  className='px-2 text-2xl'>Go Back</h3> */}
						</div>
					</header>
					{data.id ? (
						<main className='max-h-screen overflow-y-auto flex'>
							<div className=' w-9/12 flex flex-col py-6 sm:px-6 '>
								<div className='py-2 pl-4 w-full flex justify-start'></div>
								<div className='w-full h-full rounded-lg shadow bg-white'>
									{data.storeBanner ? (
										<div className='w-full h-48  relative rounded-tl-lg rounded-tr-lg'>
											<Image
												src={
													data.storeBanner
												}
												alt={
													data.storeBanner
												}
												layout='fill'
												objectFit='cover'
												className=' rounded-tl-lg rounded-tr-lg'
											/>
										</div>
									) : (
										<div className='w-full h-48  relative rounded-tl-lg rounded-tr-lg'>
											<Image
												className={`rounded-full`}
												layout='fill'
												src='/images/banner.png'
												objectFit='cover'
												alt='shop'
											/>
										</div>
									)}
									{data.storeLogo ? (
										<div className='w-40 h-40 -mt-20 ml-10 border-4 border-white shadow-sm relative rounded-full'>
											<Image
												src={
													data.storeLogo
												}
												alt={
													data.storeLogo
												}
												layout='fill'
												objectFit='contain'
												className=' rounded-full'
											/>
										</div>
									) : (
										<div className='w-40 h-40 -mt-20 ml-10 border-4 bg-white border-white shadow-sm relative rounded-full'>
											<Image
												className={`rounded-full`}
												layout='fill'
												src='/images/shop.png'
												objectFit='contain'
												alt='shop'
											/>
										</div>
									)}

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
													approve
														? 'bg-blue-500 text-white'
														: 'bg-white border-2 border-blue-500 text-blue'
												} flex justify-center items-center w-36  h-12 my-4 rounded-full`}
												onClick={
													runUpdateFunc
												}
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

export default MerchantData;
