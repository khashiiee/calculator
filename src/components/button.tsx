
interface ButtonProps {
    children: React.ReactNode
}

function Button({ children }: ButtonProps) {
    return (
        <button className="rounded-full bg-red-300 w-10 h-10 hover:bg-red-200 active:bg-red-100">
            {children}
        </button>
    )
}

export default Button
