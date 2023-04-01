import React from 'react'

const Item = () => {
    return (
        <div className='w-[15rem] h-[18rem] max-h-[18rem] text-rentBlue'>
            <img src="../../public/Rectangle 20.png" alt="img" className='rounded-lg max-w-full min-w-full cursor-pointer'/>
            <div className="flex justify-between p-3">
                <h3 className="">Furadeira Bosch g28</h3>
            </div>
            <div className="flex p-3 items-end justify-between hover:drop-shadow-xl">
                <div className="flex items-end">
                <h2 className='text-lg'>R$ 18.00 </h2>
                <span className='text-sm'>/dia</span>
                </div>
                <span class="material-icons cursor-pointer">
                    favorite_border
                </span>
            </div>
        </div>
    )
}

export default Item