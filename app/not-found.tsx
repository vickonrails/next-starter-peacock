import React from 'react'
import { Container } from '../components'

export default function NotFound() {
    return (
        <Container width="narrow">
            <h1 className="text-center">not-found</h1>
            <p className="text-center">The page you're looking for does not exist or has been removed.</p>
        </Container>
    )
}
