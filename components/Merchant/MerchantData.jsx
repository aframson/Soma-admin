import React, { useState, useEffect } from 'react';
import { Marketable } from '../../cards';
import { fetchMechants } from '../../config';

export default function MerchantData() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchMechants().then(res => setData(res));
	}, []);

	return (
		<div className='flex flex-col'>
			<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
				<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
					<div className='shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg'>
						<table className='min-w-full divide-y divide-gray-200'>
							<thead className='bg-gray-100'>
								<tr>
									<th
										scope='col'
										className='px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
									>
										Business Name
									</th>
									<th
										scope='col'
										className='px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
									>
										Email
									</th>
									<th
										scope='col'
										className='px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
									>
										Establishment
									</th>
									<th
										scope='col'
										className='px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
									>
										Phone Number
									</th>
									<th
										scope='col'
										className='px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
									>
										Action
									</th>
								</tr>
							</thead>
							<tbody className='bg-white hover:bg-gray-50 transition divide-y divide-gray-200'>
								{data.map(merchant => (
									<Marketable
										key={merchant.id}
										merchant={merchant}
									/>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
