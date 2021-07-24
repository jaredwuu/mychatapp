import React from 'react'
import onlineIcon from '../../../images/onlineIcon.png'
import closeIcon from '../../../images/closeIcon.png'

const InfoBar = ({room}) => (
    
        <div className="flex justify-between bg-blue-500 w-full h-12 rounded items-center">
            <div className="flex items-center ml-5 text-white">
                <img className="mr-2" src = {onlineIcon} alt="online"  />
                <h3>{room}</h3>
            </div>
            <div className="flex justify-end mr-6 hover:bg-red-500" >
                <a href= "/"><img src = {closeIcon} alt ="close" /> </a>
            </div>
        </div>
    
)

export default InfoBar


