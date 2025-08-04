"use client"
import React, { Suspense } from 'react'
import AdminPanel from './AdminPanel';

const page = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AdminPanel />
        </Suspense>
    )
}

export default page