'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { HTMLAttributes, ReactNode } from 'react';

const chipViewClasses = cva(
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95',
    {
        variants: {
            variant: {
                default: 'bg-chip-background text-chip-text border border-chip-border',
                primary: 'bg-primary-background text-primary-foreground',
                secondary: 'bg-secondary-background text-secondary-foreground',
                success: 'bg-success-background text-success-foreground',
                outlined: 'bg-transparent border border-primary-background text-primary-background hover:bg-primary-light',
            },
            size: {
                small: 'text-sm px-2 py-1 rounded-xs',
                medium: 'text-base px-3 py-1.5 rounded-sm',
                large: 'text-lg px-4 py-2 rounded-md',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'medium',
        },
    }
)

interface ChipViewProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof chipViewClasses> {
    layout_width?: string;
    margin?: string;
    position?: string;
    children?: ReactNode;
    text?: string;
    onRemove?: () => void;
    removable?: boolean;
    selected?: boolean;
    disabled?: boolean;
}

const ChipView = ({
    layout_width,
    margin,
    position,
    variant,
    size,
    className,
    children,
    text,
    onRemove,
    removable = false,
    selected = false,
    disabled = false,
    onClick,
    ...props
}: ChipViewProps) => {
    const optionalClasses = [
        layout_width === 'auto' ? 'w-auto' : layout_width === 'full' ? 'w-full' : layout_width ? `w-[${layout_width}]` : '',
        margin,
        position,
        selected ? 'ring-2 ring-primary-background ring-opacity-50' : '',
        disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
    ].filter(Boolean).join(' ')

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (disabled) {
            event.preventDefault()
            return
        }
        if (onClick) onClick(event)
    }

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        if (onRemove && !disabled) onRemove()
    }

    return (
        <div
            role="button"
            suppressHydrationWarning
            tabIndex={disabled ? -1 : 0}
            onClick={handleClick}
            className={twMerge(
                chipViewClasses({ variant, size }),
                optionalClasses,
                className
            )}
            aria-disabled={disabled}
            aria-selected={selected}
            {...props}
        >
            <span className="truncate">{children || text}</span>
            {removable && (
                <button
                    type="button"
                    className="ml-2 hover:text-red-500"
                    onClick={handleRemove}
                    aria-label="Remove"
                >
                    ×
                </button>
            )}
        </div>
    )
}

export default ChipView
