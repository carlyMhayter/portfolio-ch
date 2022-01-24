import Link from 'next/link';

const Links = [
  { linkName: 'Home', linkLoc: '/' },
  {
    linkName: 'Meet Me',
    linkLoc: '/about',
  },
  {
    linkName: 'Work',
    linkLoc: '/work',
  },
  {
    linkName: 'Contact',
    linkLoc: '/contact',
  },
  {
    linkName: 'Blog',
    linkLoc: 'https://carllitabobita.com/',
  },
];

function NavBar() {
  return (
    <nav className="navbar">
      <div className="link-container">
        <div className="text-links-container">
          {Links.map((link) => (
            <div key={link.linkName} className="navlink">
              <Link href={link.linkLoc}>
                <a> {link.linkName} </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
