import React, { useState } from "react";
import MyVerticallyCenteredModal from './Modal'; 
import EditProfileModal from './EditProfileModal'; 

const UserCard = ({ user }) => {
    const [viewModalShow, setViewModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const {  company,  firstName, lastName,  image } = user;
    const { title } = company;

    return (
        <>
            <div className="  border border-[#E0E0E0] bg-[#F0F2F5] font-serif text-[#333333] rounded-md hover:bg-[#E8F4FF] m-2 overflow-hidden flex flex-col align-middle"> 
                <div>
                    <img className="rounded-full p-3" src={image} alt={`${firstName} ${lastName}`} />
                </div>
                <div className="text-center">
                    <p className="font-bold">{firstName} {lastName}</p>
                    <p className="font-bold title">{title}</p>
                </div>
                <div className="flex justify-around p-2">
                    {/* View Button */}
                  

<i onClick={() => setViewModalShow(true)} className="fa-solid fa-eye text-[#0056b3] text-2xl"></i>

                    {/* Edit Button */}
                    <i className="fa-solid fa-pen text-[#0056b3] text-2xl"onClick={() => setEditModalShow(true)}></i>

                </div>
            </div>

            {/* View Modal */}
            <MyVerticallyCenteredModal
                user={user}
                show={viewModalShow}
                onHide={() => setViewModalShow(false)}
            />

            {/* Edit Modal */}
            <EditProfileModal
                user={user}
                show={editModalShow}
                onHide={() => setEditModalShow(false)}
            />
        </>
    );
};

export default UserCard;
