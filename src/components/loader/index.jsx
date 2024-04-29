import React, { useState } from 'react'
import { CircularProgress } from '@mui/material'
function Index(props) {
    const { isLoading, setIsLoading } = { ...props }
    return (
        <>
            {isLoading && <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }}>
                <div style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <CircularProgress isLoading={isLoading} setIsLoading={setIsLoading} />
                </div>
            </div>}
        </>
    )
}

export default Index
