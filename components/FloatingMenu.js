import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/dist/client/router';
const OuterMenuContainer = styled.nav`
  /* background-color: orange; */
  width: fit-content;
  height: fit-content;
  position: absolute;
  z-index: 40;
  color: var(--olive);
`;

const MenuLinks = styled.ul`
  list-style-type: none;
`;
const MenuLink = styled.li`
  border-radius: 20px;
  margin-bottom: 2px;
  padding: 0px 100px 0px 15px;
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 3px; //
    left: 50%;
    opacity: 0;
    border-radius: 2px;
    position: relative;
    ${(props) =>
      `background: linear-gradient(to right, ${props.color}, var(--vvLtGrey));`}
    /* background: linear-gradient(to right, var(--blue-ltr), var(--vvLtGrey)); // */
    transition: width 0.3s ease 0s, left 0.3s ease 0s, opacity 0.2s ease;
    width: 0;
  }

  &:first-of-type {
    &:after {
      background: linear-gradient(to right, var(--yellow), var(--vvLtGrey)); //
    }
  }

  &:hover:after {
    width: 100%;
    left: 0;
    opacity: 1;
  }

  a {
    width: 100%;
    display: block;

    /* padding: 5px 50px 10px 5px; */
  }
`;

export const linkArray = [
  { name: 'Home', href: '/', color: 'var(--hotpink)' },
  { name: 'About Me', href: '/about', color: 'var(--blue)' },
  { name: 'Work', href: '/work', color: 'var(--yellow)' },
  { name: 'Contact', href: '/contact', color: 'var(--pinkBrown)' },
  { name: 'Blog', href: 'https://carllitabobita.com/', color: 'var(--green)' },
];

function FloatingMenu() {
  const router = useRouter();

  const [currentLinks, setCurrentLinks] = useState([]);

  useEffect(() => {
    let pathname = router.pathname;
    console.log('linkArray', linkArray);
    const testing = linkArray.filter((link) => link.href !== pathname);
    setCurrentLinks(testing);
    console.log('testing', testing);
  }, []);
  console.log('router.pathname', router.pathname);
  return (
    <OuterMenuContainer>
      <MenuLinks>
        {currentLinks.map((link, index) => (
          <MenuLink
            key={`${Date.now}-${index}`}
            data-aos="fade-right"
            data-aos-delay={`${100 * index}`}
            color={link.color}
          >
            <Link href={link.href}>{link.name}</Link>
          </MenuLink>
        ))}
      </MenuLinks>
    </OuterMenuContainer>
  );
}

export default FloatingMenu;
