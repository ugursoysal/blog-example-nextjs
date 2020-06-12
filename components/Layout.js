import Nav from './Nav';
import Footer from './Footer';
import Styles from "../styles/main.scss"
import Head from "next/head";
import Tags from "../components/Tags"

function Layout({ children, title, tagArray, authorOnOff }) {
    return (
        <div className={Styles.container}>
            <Head><title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" /></Head>
            <Nav />
            <section>
                <div className={Styles.leftSection}>
                    {authorOnOff ?
                        (<div>
                            <h4>Simon Posford</h4>
                            <br />better known by his stage name Hallucinogen is an English electronic musician, specializing in psychedelic trance music. His first studio album, Twisted, released in 1995, is considered one of the most influential albums in the genre.
                        </div>) : null}
                        </div>
                <div>
                    <main>
                        {children}
                    </main>
                </div>
                {tagArray ?
                    <div className={Styles.rightSection}>
                        <Tags tagArray={tagArray}/>
                    </div> : null}
            </section>
            <Footer />
        </div>
    );
}
export default Layout