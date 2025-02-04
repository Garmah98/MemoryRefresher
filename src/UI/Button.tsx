import { ComponentPropsWithoutRef, type ReactNode } from 'react'

export type ButtonProps = {
    children: ReactNode,
    className: string,
    textOnly?: boolean,
} & ComponentPropsWithoutRef<'button'>

export default function Button({
    children,
    className,
    textOnly,
    ...props
}: ButtonProps) {
    let stylingClasses =
        'p-2 rounded-md text-first text-lg bg-third shadow-md font-semibold hover:scale-95 '
    stylingClasses += className
    if (textOnly) {
        stylingClasses =
            'm-1 p-2 text-first text-lg font-semibold border border-third rounded-md shadow-md hover:scale-95 '
        stylingClasses += className
    }
    return (
        <button {...props} className={stylingClasses}>
            {children}
        </button>
    )
}
