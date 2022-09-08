interface FooterGroupProps {
    title: string
    links: string[]
}

const FooterGroup = ({ title, links }: FooterGroupProps) => {
    return (
        <div className="flex flex-col">
            <h3 className="font-semibold text-center mb-4">{title}</h3>
            <div className="flex flex-col mb-8">
                {links.map((link) => (
                    <a
                        href="#"
                        key={`${link}-key`}
                        className="text-center mb-1"
                    >
                        {link}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default FooterGroup
