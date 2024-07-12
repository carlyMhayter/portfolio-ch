import React from 'react';
import styled from 'styled-components';
import Link from 'next/dist/client/link';

const OuterMenuContainer = styled.nav`
  /* background-color: orange; */
  width: fit-content;
  height: fit-content;
  position: absolute;
  z-index: 10;
  color: var(--olive);
`;

const MenuLinks = styled.ul`
  list-style-type: none;
`;
const MenuLink = styled.li`
  background-color: rgba(255, 255, 255, 0.5);
  /* background-color: red; */

  border-radius: 20px;
  margin-bottom: 5px;
  padding: 5px 50px 0px 15px;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px; //
    left: 50%;
    opacity: 0;
    border-radius: 2px;
    position: relative;
    background: linear-gradient(to right, var(--blue-ltr), white); //
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
        {links.map((link) => (
          <>
            {/* <MenuLink data-aos="fade-in"> */}
            <MenuLink>
              <Link href={link.href}>{link.name}</Link>
            </MenuLink>
          </>
        ))}
      </MenuLinks>
    </OuterMenuContainer>
  );
}

export default FloatingMenu;
