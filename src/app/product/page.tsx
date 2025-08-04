
import React, { Suspense } from 'react'
import ProductForm from './ProductForm'

const page = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductForm />
        </Suspense>
    )
}

export default page