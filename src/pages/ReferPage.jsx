const ReferPage = ({setIsModalOpen}) => {
    return (
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                        Invite Friends, Earn Rewards
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        Share your referral link with friends and earn rewards for each new sign-up!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="block w-full rounded border border-blue-600 bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                        >
                            Get Your Referral Link
                        </button>
                    </div>

                    <div className="mt-8">
                        <p className="text-sm text-gray-400">Already referred someone? Check your rewards <a href="#" className="underline">here</a>.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ReferPage