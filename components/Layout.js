import Nav from './Nav';
import Footer from './Footer';
import "../styles/main.scss"

function Layout({ children }) {
    return (
        <div>
            <Nav />
            <main>
                {children}
            </main>
            <Footer />
        </div>);
}
export default Layout