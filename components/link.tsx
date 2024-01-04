import { cn } from '@utils/cn'
import { AllHTMLAttributes } from 'react'

export function NativeLink({ className, ...rest }: AllHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a className={cn('text-primary', className)} {...rest} />
    )
}
