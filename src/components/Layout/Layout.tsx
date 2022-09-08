import type { PropsWithChildren } from 'react'
import Appbar from './Appbar'
import Footer from './Footer'

const Layout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <div>
            <Appbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
