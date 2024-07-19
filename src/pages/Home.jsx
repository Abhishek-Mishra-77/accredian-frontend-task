import React, { useState } from 'react';
import ReferPage from './ReferPage';
import ReferModal from './ReferModal';
import axios from "axios";
import { REACT_IP, SERVER_PORT } from '../services/common';

const Home = () => {
    const [referalDetails, setReferalDetails] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onReferFormSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://${REACT_IP}:${SERVER_PORT}/api/referrals`,
                { details: referalDetails }
            )
            setReferalDetails((prev) => ({
                ...prev,
                name: "",
                email: "",
                message: ""
            }))
            setIsModalOpen(false);
        }
        catch (error) {
            console.log(error);
        }
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