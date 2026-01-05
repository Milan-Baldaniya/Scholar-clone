'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { InputHTMLAttributes, forwardRef } from 'react';

const editTextClasses = cva(
    'border border-neutral-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:border-primary-background disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary-light',
    {
        variants: {
            variant: {
                default: 'bg-input-background text-neutral-foreground',
                filled: 'bg-neutral-light text-neutral-foreground',
                outlined: 'bg-transparent border-2',
            },
            size: {
                small: 'text-base px-2 py-1.5',
                medium: 'text-lg px-3 py-2',
                large: 'text-xl px-4 py-3',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'medium',
        },
    }
)

interface EditTextProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof editTextClasses> {
    fill_background_color?: string;
    border_border_radius?: string;
    layout_width?: string;
    padding?: string;
    margin?: string;
    position?: string;
    label?: string;
    error?: string;
    helperText?: string;
}

const EditText = forwardRef<HTMLInputElement, EditTextProps>(({
    fill_background_color = "bg-input-background",
    border_border_radius = "rounded-md",
    layout_width,
    padding,
    margin,
    position,
    variant,
    size,
    className,
    placeholder = "Enter text...",
    disabled = false,
    label,
    error,
    helperText,
    type = "text",
    ...props
}, ref) => {
    const optionalClasses = [
        layout_width === 'auto' ? 'w-auto' : layout_width === 'full' ? 'w-full' : layout_width ? `w-[${layout_width}]` : '',
        padding,
        margin,
        position,
    ].filter(Boolean).join(' ')

    const styleClasses = [
        fill_background_color,
        border_border_radius,
    ].filter(Boolean).join(' ')

    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-neutral-foreground mb-2">
                    {label}
                </label>
            )}
            <input
                ref={ref}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                className={twMerge(
                    editTextClasses({ variant, size }),
                    styleClasses,
                    optionalClasses,
                    error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '',
                    className
                )}
                aria-invalid={error ? 'true' : 'false'}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
            {helperText && !error && (
                <p className="mt-1 text-sm text-neutral-dark">{helperText}</p>
            )}
        </div>
    )
})

EditText.displayName = 'EditText'

export default EditText
