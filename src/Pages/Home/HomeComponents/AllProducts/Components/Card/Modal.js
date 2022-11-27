import React, { useContext } from 'react';
import { AuthContext } from '../../../../../../Root/Contexts/AuthProvider';

const Modal = () => {
    const {user} = useContext(AuthContext)
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <form onSubmit={''}>
                    <input type="name" defaultValue={user?.displayName} disabled className="input input-bordered w-full mb-3" />
                    <input type="email" defaultValue={user?.email} disabled className="input input-bordered w-full mb-3" />
                    <input type="text" className="input input-bordered w-full mb-3" />
                    <textarea name="message" id="" cols="30" rows="10"className="input input-bordered w-full mb-3"></textarea>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                </form>
            </div>
            </div>
        </>
    );
};

export default Modal;