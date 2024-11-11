import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button"

function UserCard({ user }) {
    const [isDialogOpen, setDialogOpen] = useState(false);

    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
            <img
                src="/profile_pic.jpeg"
                alt="User"
                className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{user.first_name} {user.last_name}</h3>


            <div className="text-gray-500 flex items-center mt-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                <span>{user.city}</span>
            </div>


            <div className="text-gray-500 flex items-center mt-1 mb-4">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span>{user.contact_number}</span>
            </div>
            <div className='flex items-center text-gray-400 gap-x-4'>
                <span>Available on phone</span>
                <Button
                    onClick={() => setDialogOpen(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
                    variant="outline"
                >
                    Fetch Details
                </Button>
            </div>

            {isDialogOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-8 w-96 relative">
                        <h3 className="text-xl font-semibold">Fetch Details</h3>
                        <h6 className='whitespace-nowrap text-gray-500'>Here are the details of the following employee.</h6>
                        <h5 className="text-gray-700 flex items-center">Name: {user.first_name} {user.last_name}</h5>
                        <div className="text-gray-700 flex items-center">
                            <h5>Location: {user.city}</h5>
                        </div>
                        <div className="text-gray-700 flex items-center mt-1">
                            <h5>Contact Number: {user.contact_number}</h5>
                        </div>
                        <h5 className='text-left'>Profile Image:</h5>
                        <img
                            src="/profile_pic.jpeg"
                            alt="Profile"
                            className="w-36 h-36 mt-4"
                        />
                        <Button variant="outline" className="absolute bottom-4 right-4 text-gray-500 hover:text-gray-700" onClick={() => setDialogOpen(false)}>
                            Close
                        </Button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default UserCard;
