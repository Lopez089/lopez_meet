export const Button = ({ children, icon }) => {
    return (
        <button className='shadow-lg shadow-blue-500/50 flex items-center gap-4 px-4 py-2 bg-blue-500 text-white rounded-md'>
            {icon}
            {children}
        </button>
    )
}