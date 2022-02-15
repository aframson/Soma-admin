import React from 'react';
import {
	BsGlobe2,
	BsCreditCard,
	BsFillPeopleFill,
	BsArrowDownCircle,
	BsFlag,
	BsCardChecklist,
	BsArrowRepeat,
} from 'react-icons/bs';
import { BiHomeAlt, BiBook } from 'react-icons/bi';
import { RiRefund2Fill, RiStackLine } from 'react-icons/ri';
import { GiSplitArrows } from 'react-icons/gi';
import { FiShoppingBag, FiMail } from 'react-icons/fi';

export default function MerchantSidebar({ active }) {
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
						className='icon active'
						ng-class="{active: $state.includes('app.compliance')}"
					>
						<path
							d='M14.566 7.599v.613a6.667 6.667 0 11-3.953-6.093'
							stroke='white'
							strokeLinecap='round'
							strokeLinejoin='round'
						></path>
						<path
							d='M14.566 2.879L7.9 9.552l-2-2'
							stroke='white'
							strokeLinecap='round'
							strokeLinejoin='round'
						></path>
					</svg>
					<p className='ml-2'>Compliance</p>
				</li>

				<li className='mt-4 text-base flex items-center'>
					<BiHomeAlt color={'white'} size={17} />
					<p className='ml-2'>Home</p>
				</li>
				<li className='mt-4 text-slate-400 font-bold text-sm'>
					PAYMENTS
				</li>
				<li className='mt-4 text-base flex items-center'>
					<BsCreditCard color={'white'} size={17} />
					<p className='ml-2'>Transactions</p>
				</li>
				<li className='mt-4 text-base flex items-center'>
					<BsFillPeopleFill color={'white'} size={17} />
					<p className='ml-2'>Customers</p>
				</li>
				<li className='mt-4 text-base flex items-center'>
					<RiRefund2Fill color={'white'} size={17} />
					<p className='ml-2'>Refunds</p>
				</li>
				<li className='mt-4 text-base flex items-center'>
					<BsArrowDownCircle color={'white'} size={17} />
					<p className='ml-2'>Payouts</p>
				</li>
				<li className='mt-4 text-base flex items-center'>
					<BsFlag color={'white'} size={17} />
					<p className='ml-2'>Disputes</p>
				</li>
				<li className='mt-4 text-base flex items-center'>
					<GiSplitArrows color={'white'} size={17} />
					<p className='ml-2'>Transaction Splits</p>
				</li>
				<li className='mt-4 text-base flex items-center'>
					<BiBook color={'white'} size={17} />
					<p className='ml-2'>Subaccounts</p>
				</li>
				<li className='mt-4 text-slate-400 font-bold text-sm'>
					RECURRING
				</li>
				<li className='mt-4 text-base flex items-center'>
					<BsArrowRepeat color={'white'} size={17} />
					<p className='ml-2'>Subscribers</p>
				</li>
				<li className='mt-4 text-base flex items-center'>
					<RiStackLine color={'white'} size={17} />
					<p className='ml-2'>Plans</p>
				</li>
				<li className='mt-4 text-base flex items-center'>
					<BsCardChecklist color={'white'} size={17} />
					<p className='ml-2'>Subscriptions</p>
				</li>
				<li className='mt-4 text-slate-400 font-bold text-sm'>
					COMMERCE
				</li>
				<li className='mt-4 text-base flex items-center'>
					<BsArrowDownCircle color={'white'} size={17} />
					<p className='ml-2'>Payment Pages</p>
				</li>
				<li className='mt-4 text-base flex items-center'>
					<svg
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='icon'
						ng-class="{active: $state.includes('pages')}"
					>
						<path
							d='M1.54667 4.10668L8.00001 7.33334M8.00001 7.33334L14.4533 4.10668M8.00001 7.33334L8.00001 15.1733M4.66668 2.33335L11.3333 5.66668M8.59335 0.966685L13.9267 3.63335C14.1488 3.74374 14.3358 3.9139 14.4665 4.12471C14.5972 4.33553 14.6665 4.57863 14.6667 4.82668V11.18C14.6665 11.4281 14.5972 11.6712 14.4665 11.882C14.3358 12.0928 14.1488 12.263 13.9267 12.3734L8.59335 15.04C8.40811 15.1327 8.20382 15.181 7.99668 15.181C7.78954 15.181 7.58525 15.1327 7.40001 15.04L2.06668 12.3734C1.84476 12.2615 1.65851 12.0899 1.52894 11.8779C1.39936 11.6659 1.33162 11.4218 1.33335 11.1734V4.82668C1.33348 4.57863 1.4028 4.33553 1.53353 4.12471C1.66426 3.9139 1.8512 3.74374 2.07335 3.63335L7.40668 0.966685C7.59105 0.875069 7.79413 0.827393 8.00001 0.827393C8.20589 0.827393 8.40897 0.875069 8.59335 0.966685Z'
							stroke='white'
							strokeLinecap='round'
							strokeLinejoin='round'
						></path>
					</svg>
					<p className='ml-2'>Products</p>
				</li>
				<li className='mt-4 text-base flex items-center'>
					<FiMail color={'white'} size={17} />
					<p className='ml-2'>Invoice</p>
				</li>
			</ul>
		</div>
	);
}
