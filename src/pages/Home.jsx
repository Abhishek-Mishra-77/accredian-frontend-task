import React, { useState } from 'react';
import ReferPage from './ReferPage';
import ReferModal from './ReferModal';

const Home = () => {
    const [referalDetails, setReferalDetails] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onReferFormSubmitHandler = (e) => {
        e.preventDefault();
        console.log(referalDetails)
        setIsModalOpen(false)
    }

    return (
        <>
            <ReferPage setIsModalOpen={setIsModalOpen} />
            <ReferModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                setReferalDetails={setReferalDetails}
                referalDetails={referalDetails}
                onReferFormSubmitHandler={onReferFormSubmitHandler}
            />
        </>
    )
}

export default Home