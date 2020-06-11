import Nav from './Nav';
import Footer from './Footer';
import Styles from "../styles/main.scss"

function Layout({ children }) {
    return (
        <div className={Styles.container}>
            <Nav />
            <section>
                <div>Let’s take a look at how we can structure our Sass projects. As projects grow and expand, the need to modularize our directory and file structure increases dramatically. Thus keeping our files and folders organized is crucial. We also have the added benefit of creating components that can be reused across multiple projects. There is no one “correct” structure — its entirely up to you!</div>
                <div>
                    <main>
                        {children}
                    </main>
                </div>
                <div>Let’s take a look at how we can structure our Sass projects. As projects grow and expand, the need to modularize our directory and file structure increases dramatically. Thus keeping our files and folders organized is crucial. We also have the added benefit of creating components that can be reused across multiple projects. There is no one “correct” structure — its entirely up to you!</div>
            </section>
            <Footer />
        </div>
    );
}
export default Layout