interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
}

function Button({ children, onClick }: ButtonProps) {
    return (
        <button 
            className="rounded-full bg-red-300 w-10 h-10 hover:bg-red-200 active:bg-red-100"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
