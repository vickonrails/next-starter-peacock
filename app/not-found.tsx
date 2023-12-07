import { Container } from '@components'

export default function NotFound() {
    return (
        <Container width="narrow" className="py-16">
            <h1 className="text-center font-display text-4xl mb-4">Not Found</h1>
            <p className="text-center text-accent-4">The page you&#39;re looking for does not exist or has been removed.</p>
        </Container>
    )
}
