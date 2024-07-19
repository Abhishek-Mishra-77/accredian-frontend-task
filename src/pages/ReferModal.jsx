
const ReferModal = ({ isModalOpen,
    setIsModalOpen,
    setReferalDetails,
    referalDetails,
    onReferFormSubmitHandler }) => {
    return (
        <>
            {isModalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
                    <div className="fixed inset-0 bg-gray-500 opacity-75" aria-hidden="true"></div>

                    <div className="relative bg-white rounded-lg p-6 mx-4 sm:mx-auto max-w-md w-full">
                        <div className="absolute top-0 right-0 p-2">
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
                        <form onSubmit={onReferFormSubmitHandler}>
                            <div className="mb-4">
                                <label htmlFor="friendName" className="block text-sm font-medium text-gray-700">Friend's Name</label>
                                <input
                                    type="text"
                                    id="friendName"
                                    name="friendName"
                                    value={referalDetails.name}
                                    onChange={(e) => setReferalDetails((prev) => ({ ...prev, name: e.target.value }))}
                                    required
                                    className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Enter friend's name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="friendEmail" className="block text-sm font-medium text-gray-700">Friend's Email</label>
                                <input
                                    type="email"
                                    id="friendEmail"
                                    name="friendEmail"
                                    required
                                    value={referalDetails.email}
                                    onChange={(e) => setReferalDetails((prev) => ({ ...prev, email: e.target.value }))}
                                    className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Enter friend's email"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (optional)</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="3"
                                    value={referalDetails.message}
                                    onChange={(e) => setReferalDetails((prev) => ({ ...prev, message: e.target.value }))}
                                    required
                                    className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Enter your message (optional)"
                                ></textarea>
                            </div>
                            <div className="text-right">
                                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Send Invite
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ReferModal;
