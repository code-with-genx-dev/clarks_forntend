
import React, { Suspense } from 'react'
import ProductView from './ProductView';

const page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductView />
        </Suspense>
    )
}

export default page