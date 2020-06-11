import Link from 'next/link'

const Nav = () => (
    <nav>
        <ul>
            <li><Link href="/index"><a>INDEX</a></Link></li>
            <li><Link href="/blog"><a>BLOG</a></Link></li>
            <li><Link href="/about"><a>ABOUT</a></Link></li>
        </ul>
    </nav>
);

export default Nav