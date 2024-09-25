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

const DropdownContainer = styled.div`
  position: absolute;
  height: fit-content;
  padding-top: 3rem;
  padding-left: 1rem;
  padding-right: 0.5rem;
  border-radius: 10px;
  width: fit-content;
  z-index: 40;
  right: 0;
  top: ${(props) => (props.show ? `-2rem` : ` -10rem`)};
  transition: 0.75s all ease;
  background: transparent;
  font-weight: 800;
  font-size: 40px;
  text-transform: lowercase;
  font-style: italic;
  ${(props) => `color:  ${props.color};`}
  background-color: pink;
  ${(props) => `background-color:  ${props.color};`}

  transform: perspective(30px) rotateX(0deg) rotateY(2deg);
  @media only screen and (min-width: 480px) {
    font-size: 50px;
  }
  @media only screen and (min-width: 640px) {
    font-size: 60px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 70px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 80px;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 90px;
  }
  @media only screen and (min-width: 1536px) {
    font-size: 95px;
  }

  @media only screen and (min-width: 2000px) {
    font-size: 100px;
  }
`;

const DropdownText = styled.h1`
  position: absolute;
  z-index: 40;
  right: 0em;
  /* border: 1px solid red; */
  top: ${(props) => (props.show ? `0rem` : ` -10rem`)};
  transition: 1s all ease;
  background: transparent;
  font-weight: 800;
  font-size: 40px;
  text-transform: lowercase;
  font-style: italic;
  color: var(--vvLtGrey);
  /* ${(props) => `color:  ${props.color};`} */
  padding-right: 0.5em;
  @media only screen and (min-width: 480px) {
    font-size: 50px;
  }
  @media only screen and (min-width: 640px) {
    font-size: 60px;
    /* border-bottom: 8px solid ${(props) => ` ${props.color}`}; */
  }
  @media only screen and (min-width: 768px) {
    font-size: 70px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 80px;
    /* border-bottom: 9px solid ${(props) => ` ${props.color}`}; */
  }
  @media only screen and (min-width: 1280px) {
    font-size: 90px;
  }
  @media only screen and (min-width: 1536px) {
    font-size: 95px;
  }

  @media only screen and (min-width: 2000px) {
    font-size: 100px;
    /* border-bottom: 10px solid ${(props) => ` ${props.color}`}; */
  }
`;

export const linkArray = [
  { name: 'Home', href: '/', color: 'var(--hotpink)' },
  { name: 'Work', href: '/work', color: 'var(--blue-ltr)' },
  { name: 'Fine Art', href: '/fineart', color: 'var(--ltgreen)' },
  { name: 'Web', href: '/web', color: 'var(--yellow)' },
  { name: 'About Me', href: '/about', color: 'var(--ltpink)' },
  { name: 'Contact', href: '/contact', color: 'var(--pinkBrown)' },
  { name: 'Blog', href: 'https://carllitabobita.com/', color: 'var(--green)' },
];

function FloatingMenu() {
  const router = useRouter();
  const [currentLinks, setCurrentLinks] = useState([]);
  const [current, setCurrent] = useState(linkArray[0]);
  const [show, setShow] = useState(false);
  console.log('show', show);

  useEffect(() => {
    const pathname = router.pathname;
    // console.log('linkArray', linkArray);
    const testing = linkArray.filter(
      (link) =>
        link.href !== pathname &&
        link.href !== '/web' &&
        link.href !== '/fineart',
    );
    const thing = linkArray.filter((link) => link.href === pathname)[0];
    setCurrent(thing);
    setCurrentLinks(testing);
    setTimeout(() => {
      setShow(true);
    }, 250);
    // console.log('testing', testing);
  }, []);

  // console.log('router.pathname', router.pathname);
  return (
    <>
      {current.name !== 'Home' && (
        <DropdownContainer color={current.color} show={show}>
          {current.name}
        </DropdownContainer>
      )}
      {current.name !== 'Home' && (
        <DropdownText color={current.color} show={show}>
          {current.name}
        </DropdownText>
      )}

      <OuterMenuContainer>
        <MenuLinks>
          {currentLinks.map((link, index) => (
            <MenuLink
              key={`${Date.now}-${index}`}
              data-aos="fade-right"
              data-aos-delay={`${100 * index}`}
              color={link.color}
            >
              <Link
                href={link.href}
                target={link.name === 'Blog' ? '_blank' : '_self'}
              >
                {link.name}
              </Link>
            </MenuLink>
          ))}
        </MenuLinks>
      </OuterMenuContainer>
    </>
  );
}

export default FloatingMenu;
