import React from 'react';

function Marketable() {
	return (
		<tr>
			<td class='px-6 py-4 whitespace-nowrap'>
				<div class='flex items-center'>
					<div>
						<div class='text-sm font-medium text-gray-900'>
							Jane Cooper
						</div>
					</div>
				</div>
			</td>
			<td class='px-6 py-4 whitespace-nowrap'>
				<div class='text-sm text-gray-900'>
					Regional Paradigm Technician
				</div>
			</td>
			<td class='px-6 py-4 whitespace-nowrap'>
				<span class='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
					Active
				</span>
			</td>
			<td class='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
				Admin
			</td>
			<td class='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
				<a
					href='#'
					class='text-indigo-600 hover:text-indigo-900'
				>
					Edit
				</a>
			</td>
		</tr>
	);
}

export default Marketable;
