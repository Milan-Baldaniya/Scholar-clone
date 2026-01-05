'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const buttonClasses = cva(
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
    {
        variants: {
            variant: {
                default: 'bg-button-primary-background text-button-primary-text hover:bg-primary-dark',
                success: 'bg-button-success-background text-button-success-text hover:bg-success-medium',
                light: 'bg-button-light-background text-button-light-text hover:bg-success-light',
                outlined: 'bg-transparent border-2 border-primary-background text-primary-background hover:bg-primary-light',
            },
            size: {
                small: 'text-base px-4 py-2',
                medium: 'text-lg px-6 py-3',
                large: 'text-xl px-8 py-4',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'medium',
        },
    }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonClasses> {
    // Custom styling props
    text?: string;
    text_font_size?: string;
    text_font_family?: string;
    text_font_weight?: string;
    text_line_height?: string;
    text_color?: string;
    fill_background_color?: string;
    border_border_radius?: string;
    effect_box_shadow?: string;
    layout_gap?: string;
    layout_width?: string;
    padding?: string;
    margin?: string;
    position?: string;

    // Standard props
    children?: ReactNode;
}

const Button = ({
    // Custom props
    text,
    text_font_size,
    text_font_family,
    text_font_weight,
    text_line_height,
    text_color,
    fill_background_color,
    border_border_radius,
    effect_box_shadow,
    layout_gap,
    layout_width,
    padding,
    margin,
    position,

    // Standard props
    variant,
    size,
    className,
    children,
    disabled = false,
    type = 'button',
    ...props
}: ButtonProps) => {
    // Build custom classes from props
    const customClasses = [
        text_font_size,
        text_font_family ? `font-['${text_font_family}']` : '',
        text_font_weight,
        text_line_height,
        text_color,
        fill_background_color,
        border_border_radius,
        effect_box_shadow ? `shadow-[${effect_box_shadow}]` : '',
        layout_gap ? `gap-[${layout_gap}]` : '',
        layout_width === 'full' ? 'w-full' : layout_width === 'auto' ? 'w-auto' : layout_width ? `w-[${layout_width}]` : '',
        padding,
        margin,
        position,
    ].filter(Boolean).join(' ')

    return (
        <button
            type={type}
            disabled={disabled}
            className={twMerge(
                buttonClasses({ variant, size }),
                customClasses,
                className
            )}
            {...props}
        >
            {children || text}
        </button>
    )
}

export default Button
