import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogClose,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

function UserCard({ user }) {

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
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-black text-white px-4 py-2 rounded mt-2 hover:bg-gray-600" variant="outline">Fetch Details</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Fetch Details</DialogTitle>
                            <DialogDescription>
                                Here are the details of the following employee.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="bg-white rounded-lg w-96 relative">
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
                            </div>
                        </div>
                        <DialogFooter className="sm:justify-end">
                            <DialogClose asChild>
                                <Button type="button" variant="outline" className="absolute bottom-4 right-4 text-gray-500 hover:text-gray-700">
                                    Close
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

            </div>

        </div>
    );
}

export default UserCard;
