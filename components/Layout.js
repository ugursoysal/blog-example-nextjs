import Nav from './Nav';
import Footer from './Footer';
import Styles from "../styles/main.scss"
import Head from "next/head";
function Layout({ children, title }) {
    var tagArray = ["#ableton", "#live", "#beat", "#trap", "#sampling", "#instrumental", "#beatmaking", "#freesamples", "#musicproducer", "#vinyl", "#oldschool", "#art", "#mpc", "#artist", "#lofi", "#beatsforsale", "#love", "#beauty", "#drums"];
    return (
        <div className={Styles.container}>
            <Head><title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" /></Head>
            <Nav />
            <section>
                <div><h4>Simon Posford</h4><br/>better known by his stage name Hallucinogen is an English electronic musician, specializing in psychedelic trance music. His first studio album, Twisted, released in 1995, is considered one of the most influential albums in the genre.</div>
                <div>
                    <main>
                        {children}
                    </main>
                </div>
                <div><ul>{tagArray.map(function(tagArray){return (<li><a href="#">{tagArray}</a></li>);})}</ul></div>
            </section>
            <Footer />
        </div>
    );
}
export default Layout