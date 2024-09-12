import React from 'react';
import styled from 'styled-components';
import FloatingMenu from './FloatingMenu';

const OuterContainer = styled.div`
  width: 100%;
  /* height: fit-content; */
  position: relative;
  ${(props) =>
    props.fullHeight
      ? 'height: calc(100dvh - 1rem);'
      : 'height: fit-content;'}/* overflow-y: scroll; */
  /* padding-bottom: 3rem; */
`;

const InnerContainer = styled.div`
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  position: relative;
  margin: 0 auto;
  margin-top: 1rem;
  max-width: 1200px;
`;

export default function PageLayout({ children, fullHeight }) {
  return (
    <OuterContainer fullHeight={fullHeight}>
      <InnerContainer>
        <FloatingMenu />
        {children}
      </InnerContainer>
    </OuterContainer>
  );
}
