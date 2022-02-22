import React from 'react'
import { useRouter } from 'next/router'


function merchantData() {
      const Router = useRouter();

      const {merchantId} = Router.query;
      return (
    <div>merchantData {merchantId}</div>
  )
}

export default merchantData