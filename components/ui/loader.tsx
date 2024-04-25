import React from 'react'

const Loader = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Loader