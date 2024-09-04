import React from 'react';
import styled from 'styled-components';
import Link from 'next/dist/client/link';

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
    background: linear-gradient(to right, var(--blue-ltr), var(--vvLtGrey)); //
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

function FloatingMenu({ links }) {
  return (
    <OuterMenuContainer>
      <MenuLinks>
        {links.map((link, index) => (
          <>
            {/* <MenuLink data-aos="fade-in"> */}
            <MenuLink data-aos="fade-right" data-aos-delay={`${100 * index}`}>
              <Link href={link.href}>{link.name}</Link>
            </MenuLink>
          </>
        ))}
      </MenuLinks>
    </OuterMenuContainer>
  );
}

export default FloatingMenu;
