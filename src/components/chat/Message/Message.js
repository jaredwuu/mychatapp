import React from 'react'
import ReactEmoji from 'react-emoji'

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();
    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser ?
            (<div className="flex flex-end justify-end py-1 mt-1">
                <div className='px-3 py-1 inline-block max-w-3/4 rounded-full bg-blue-500'>
                    <p className="w-full tracking-normal float-left text-sm break-all text-white">{ReactEmoji.emojify(text)}</p>
                </div>
                <p className="flex items-center text-gray-400 tracking-tight px-2">{trimmedName}</p>
            </div>
            ) :
            (<div className="flex flex-start justify-start py-1 mt-1">
                <p className="flex items-center text-gray-400 tracking-tight px-2">{user}</p>
                <div className="px-3 py-1 inline-block max-w-3/4 rounded-full bg-gray-200">
                    <p className="w-full tracking-normal float-left text-sm break-all text-gray-600">{ReactEmoji.emojify(text)}</p>
                </div>

            </div>
            )
    )

}




export default Message
