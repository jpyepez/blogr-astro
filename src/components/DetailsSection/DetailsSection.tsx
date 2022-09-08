import detailsSectionContent from '../../lang/DetailsSection/detailsSectionContent'
import IllustrationLaptopMobile from '../Images/IllustrationLaptopMobile'
import DetailsSectionItem from './DetailsSectionItem'

const DetailsSection = () => {
    return (
        <div className="flex-col-center mt-16 mb-24">
            <IllustrationLaptopMobile />
            {detailsSectionContent.map(({ title, body }) => (
                <DetailsSectionItem
                    title={title}
                    body={body}
                    key={`${title}-key`}
                />
            ))}
        </div>
    )
}

export default DetailsSection
