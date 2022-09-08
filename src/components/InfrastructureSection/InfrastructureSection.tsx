import displayAlert from '../../utils/displayAlert'
import IllustrationPhones from '../Images/IllustrationPhones'

const InfrastructureSection = () => {
    const learnMessage =
        'You have now learned more... but further down the page.'
    return (
        <div className="flex-col-center bg-gradient-to-b from-body-very-dark-gray-blue to-body-very-dark-desaturated-blue py-24 rounded-tr-3xl rounded-bl-3xl">
            <IllustrationPhones />
            <div className="px-12 text-center text-white">
                <h2 className="text-3xl mb-8">
                    State of the Art Infrastructure
                </h2>
                <p className="font-light">
                    With reliability and speed in mind. Worldwide data centers
                    provide the backbone for ultra-fast connectivity. This
                    ensures your site will load instantly, no matter where your
                    readers are, keeping your site competitive.
                </p>

                <button
                    className="rounded-3xl p-4 text-white border border-white font-semibold text-sm leading-[.5] mt-8"
                    onClick={() => displayAlert(learnMessage)}
                >
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default InfrastructureSection
