import futureSectionContent from '../../lang/FutureSection/futureSectionContent'
import IllustrationEditorMobile from '../Images/IllustrationEditorMobile'
import FutureSectionItem from './FutureSectionItem'

const FutureSection = () => {
    return (
        <div className="flex-col-center my-24">
            <h2 className="font-ubuntu text-2xl text-primary-very-dark-blue mb-8">
                Designed for the future
            </h2>
            <IllustrationEditorMobile />
            {futureSectionContent.map(({ title, body }) => (
                <FutureSectionItem
                    title={title}
                    body={body}
                    key={`${title}-key`}
                />
            ))}
        </div>
    )
}

export default FutureSection
