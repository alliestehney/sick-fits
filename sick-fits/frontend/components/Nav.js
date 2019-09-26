import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/sell">
            Sell!
        </Link>
    </div>
)

export default Nav;
