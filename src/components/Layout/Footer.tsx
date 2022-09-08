import footerContent from '../../lang/Layout/footerContent'
import FooterGroup from './FooterGroup'

const Footer = () => {
    return (
        <footer className="flex-col-center bg-neutral-very-dark-black-blue text-neutral-grayish-blue py-16 rounded-tr-3xl">
            <h2 className="text-3xl font-bold mb-12">Blogr</h2>
            {footerContent.map(({ title, links }) => (
                <FooterGroup title={title} links={links} key={`${title}-key`} />
            ))}
        </footer>
    )
}

export default Footer
