interface FutureSectionItemProps {
    title: string
    body: string
}

const FutureSectionItem = ({ title, body }: FutureSectionItemProps) => {
    return (
        <div className="flex-col-center px-12 mt-8 text-center">
            <h3 className="text-2xl mb-4 text-primary-very-dark-blue font-ubuntu">
                {title}
            </h3>
            <p className="text-neutral-very-dark-grayish-blue">{body}</p>
        </div>
    )
}

export default FutureSectionItem
