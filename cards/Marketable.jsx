import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Marketable({ merchant }) {
	const Router = useRouter();
	return (
		<tr onClick={e => Router.push(`/merchant/${merchant.id}`)}>
			<td className='px-6 py-6 whitespace-nowrap'>
				<div className='flex items-center'>
					{merchant.storeBanner ? (
						<div
							className={`flex-shrink-0 relative w-10 h-10 mr-4`}
						>
							<Image
								src={merchant.storeBanner}
								alt={merchant.storeBanner}
								layout='fill'
								objectFit='contain'
								className={`rounded-lg shadow-xl w-10 h-10 mr-4`}
							/>
						</div>
					) : (
						<div
							className={`flex-shrink-0 w-10 h-10 mr-4`}
						>
							<Image
								className={`rounded-lg shadow-lg w-10 h-10 mr-4`}
								layout='fill'
								objectFit='contain'
								alt='.'
							/>
						</div>
					)}
					<div className='ml-4'>
						<div className='text-sm font-medium text-gray-900'>
							{merchant.businessName}
						</div>
					</div>
				</div>
			</td>
			{/* <td class='px-6 py-4 whitespace-nowrap'>
				<div class='flex items-center'>
					<div>
						<div class='text-sm font-medium text-gray-900'>
							{merchant.businessName}
						</div>
					</div>
				</div>
			</td> */}
			<td className='px-6 py-4 whitespace-nowrap'>
				<div className='text-sm text-gray-900'>
					{merchant.email}
				</div>
			</td>
			<td className='px-6 py-4 whitespace-nowrap'>
				<div className='text-sm text-gray-900'>
					{merchant.establishment}
				</div>
			</td>
			{/* <td className='px-6 py-4 whitespace-nowrap'>
				<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
					Active
				</span>
			</td> */}
			<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
				{merchant.telephone}
			</td>
			<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
				<a
					href='#'
					className='text-indigo-600 hover:text-indigo-900 w-36 h-36 '
				>
					{'>'}
				</a>
			</td>
		</tr>
	);
}

export default Marketable;
