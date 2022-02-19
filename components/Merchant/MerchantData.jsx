import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import db from '../../config/firebase';
import { Marketable } from '../../cards';

export default function MerchantData() {
	const Perterns_Table = 'partners';

	const [data, setData] = useState('');

	const fetchMechants = async () => {
		const q = query(collection(db, Perterns_Table));

		const querySnapshot = await getDocs(q);
		const mainData = [];

		querySnapshot.forEach(doc => {
			// doc.data() is never undefined for query doc snapshots
			// console.log('data =',doc.data());
			mainData.push(doc.data());
		});

		setData(mainData);
	};

	useEffect(() => {
		fetchMechants();
	}, []);

	return (
		<div class='flex flex-col'>
			<div class='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
				<div class='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
					<div class='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
						<table class='min-w-full divide-y divide-gray-200'>
							<thead class='bg-gray-50'>
								<tr>
									<th
										scope='col'
										class='px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
									>
										Business Name
									</th>
									<th
										scope='col'
										class='px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
									>
										Email
									</th>
									<th
										scope='col'
										class='px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
									>
										Establishment
									</th>
									<th
										scope='col'
										class='px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
									>
										Phone Number
									</th>
									<th
										scope='col'
										class='px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
									>
										Action
									</th>
								</tr>
							</thead>
							<tbody class='bg-white divide-y divide-gray-200'>
								{data?.map(merchant =>
									<Marketable key={merchant.id} merchant={merchant}/>								
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
