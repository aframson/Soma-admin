import React from 'react';
import { BsGlobe2 } from 'react-icons/bs';
export default function Sidebar({ active }) {
	return (
		<div className='w-64 h-screen bg-gray-800 border-t border-white hidden lg:block'>
			<ul className='flex  flex-col  mt-4 pt-4 ml-8 text-slate-200 font-thin'>
				<li className='mt-4 text-base flex items-center'>
					<BsGlobe2 color={'white'} size={17} />
					<p className='ml-2'>Get Started</p>
				</li>
				<li className='mt-4 text-base flex items-center'>
					<svg
						width='16'
						height='16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						class='icon active'
						ng-class="{active: $state.includes('app.compliance')}"
					>
						<path
							d='M14.566 7.599v.613a6.667 6.667 0 11-3.953-6.093'
							stroke='white'
							stroke-linecap='round'
							stroke-linejoin='round'
						></path>
						<path
							d='M14.566 2.879L7.9 9.552l-2-2'
							stroke='white'
							stroke-linecap='round'
							stroke-linejoin='round'
						></path>
					</svg>
					<p className='ml-2'>Compliance</p>
				</li>

				<li className='mt-2 text-base'>
					<p>Home</p>
				</li>
				<li className='mt-4 text-slate-400 font-bold text-sm'>
					PAYMENTS
				</li>
				<li className='mt-2 text-base'>Transactions</li>
				<li className='mt-2 text-base'>Customers</li>
				<li className='mt-2 text-base'>Refunds</li>
				<li className='mt-2 text-base'>Payouts</li>
				<li className='mt-2 text-base'>Disputes</li>
				<li className='mt-2 text-base'>Transaction Splits</li>
				<li className='mt-2 text-base'>Subaccounts</li>
				<li className='mt-3 text-slate-400 font-bold text-sm'>
					RECURRING
				</li>
				<li className='mt-2 text-base'>Subscribers</li>
				<li className='mt-2 text-base'>Plans</li>
				<li className='mt-2 text-base'>Subscriptions</li>
				<li className='mt-3 text-slate-400 font-bold text-sm'>
					COMMERCE
				</li>
				<li className='mt-2 text-base'>Payment Pages</li>
				<li className='mt-2 text-base'>Products</li>
				<li className='mt-2 text-base'>Storefronts</li>
				<li className='mt-2 text-base'>Storefronts</li>
				<li className='mt-2 text-base'>Storefronts</li>
			</ul>
		</div>
	);
}
