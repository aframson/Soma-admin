import React from 'react'
import Image from 'next/image';
function MerchantProduct({product}) {
      function truncateText(selector, maxLength) {
		let truncated = selector;

		if (truncated.length > maxLength) {
			truncated = truncated.substr(0, maxLength) + '...';
		}
		return truncated;
	}

  return (
		<div className='bg-white rounded-lg shadow flex  justify-center items-center gap-4'>
			<div className='w-40 h-32 rounded-tl-lg rounded-bl-lg relative'>
				<Image
					src={product.productImage}
					alt='store'
					layout='fill'
					objectFit='cover'
					className='rounded-tl-lg rounded-bl-lg'
				/>
			</div>
			<div className='w-full h-32 flex flex-col pt-3'>
				<h3 className='text-lg font-sans text-slate-700 font-semibold'>
					{product.productName}
				</h3>
				<h3 className='text-base font-sans text-slate-600 font-semibold'>
					Description:
				</h3>
				<h3 className='text-base font-sans text-slate-500  font-semibold'>
					{truncateText(product.description, 30)}
				</h3>
				<h3 className='text-base font-sans text-slate-600 font-semibold'>
					{product.price} ghc
				</h3>
			</div>
		</div>
  );
}

export default MerchantProduct