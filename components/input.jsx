export const Input = ({ icon }) => {
    return (
        <lable className='flex relative'>
            <div className='flex absolute top-3 left-3 text-neutral-400'>
                {icon}
            </div>
            <input className="col-end-auto shadow appearance-none border rounded-md  py-0 px-9 text-neutral-600 leading-tight focus:text-neutral-400 focus:outline-none focus:shadow-outline"
                id="codigoRoom"
                type="text"
                placeholder='Introduce un codigo '>

            </input>
        </lable>
    )
}