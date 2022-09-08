import displayAlert from '../../utils/displayAlert'

const MainHero = () => {
    const startMessage = 'Welcome to Blogr!'
    const learnMessage = 'You have now learned more...'
    return (
        <div className="flex-col-center py-32 p-12 bg-gradient-to-b from-primary-very-light-red to-primary-light-red rounded-bl-3xl">
            <h2 className="text-white text-3xl text-center mb-4">
                A modern publishing platform
            </h2>
            <p className="text-white mb-8 font-light text-center">
                Grow your audience and build your online brand
            </p>
            <div className="flex justify-center gap-4">
                <button
                    className="bg-white p-4 rounded-3xl text-primary-light-red font-semibold text-sm leading-[.5]"
                    onClick={() => displayAlert(startMessage)}
                >
                    Start for free
                </button>
                <button
                    className="rounded-3xl p-4 text-white border border-white font-semibold text-sm leading-[.5]"
                    onClick={() => displayAlert(learnMessage)}
                >
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default MainHero
