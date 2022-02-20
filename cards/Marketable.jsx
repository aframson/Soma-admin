import React from 'react';

function Marketable({ merchant }) {
	return (
		<tr>
			<td className='px-6 py-4 whitespace-nowrap'>
				<div className='flex items-center'>
					{merchant.storeBanner ? (
						<div
							className={`flex-shrink-0 w-10 h-10 mr-4`}
						>
							<img
								className={`rounded-full w-10 h-10 mr-4`}
								src={merchant.storeBanner}
								alt={merchant.username}
							/>
						</div>
					) : (
						<div
							className={`flex-shrink-0 w-10 h-10 mr-4`}
						>
							<img
								className={`rounded-full w-10 h-10 mr-4`}
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
					className='text-indigo-600 hover:text-indigo-900'
				>
					Edit
				</a>
			</td>
		</tr>
	);
}

export default Marketable;
