import Image from 'next/image';
import Link from 'next/link';
import ComputerIcon from '@mui/icons-material/Computer';
import BrushIcon from '@mui/icons-material/Brush';
import Head from 'next/head';
import styled from 'styled-components';
import FloatingMenu from '../components/FloatingMenu';
import { linkArray } from '../data/data';
import PageLayout from '../components/PageLayout';

const WorkContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font);
`;

const WorkTypeContainer = styled.div`
  padding: 0.5rem 1rem;
  margin: 0.5rem 0rem;
  text-align: center;
  transition: all ease 0.5s;
  cursor: pointer;
  background: linear-gradient(to right, var(--green), var(--green)),
    linear-gradient(to right, var(--beige), var(--beige));
  background-size: 100% 0.1em, 0 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;

  &:first-of-type {
    background: linear-gradient(to right, var(--yellow), var(--yellow)),
      linear-gradient(to right, var(--blue-ltr), var(--blue-ltr));
    background-size: 100% 0.1em, 0 0.1em;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
  }

  &:last-of-type {
    background: linear-gradient(to right, var(--hotpink), var(--hotpink)),
      linear-gradient(to right, var(--blue), var(--blue));
    background-size: 100% 0.1em, 0 0.1em;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
  }

  &:hover {
    background-size: 0 0.1em, 100% 0.1em;
  }
`;
const Text = styled.p`
  font-style: italic;
  font-weight: 600;
`;

const ResumeContainer = styled.a`
  border-radius: 10px;
  padding: 0.5rem 3rem;
  margin: 0.5rem 0rem;
  text-align: center;
  /* box-shadow: inset 0px -20px 20px white; */
  transition: all ease 0.5s;
  font-family: var(--darkYellow);
  cursor: pointer;
  &:hover {
    /* box-shadow: inset 0px -10px 40px white; */
  }
`;

function Home() {
  return (
    <>
      <Head>
        <title>Work - Carly Hayter</title>
      </Head>
      <PageLayout>
        <FloatingMenu links={linkArray} />

        <WorkContainer>
          <Link href="./fineart">
            <WorkTypeContainer>
              <Text>Fine Art</Text>
            </WorkTypeContainer>
          </Link>
          <Link href="./web">
            <WorkTypeContainer>
              <Text>Web</Text>
            </WorkTypeContainer>
          </Link>
          <Link href="/HayterCarly_Resume_Nov2022_v2.pdf" download>
            <WorkTypeContainer>
              <Text>Resume</Text>
            </WorkTypeContainer>
          </Link>
          {/* <ResumeContainer href="/HayterCarly_Resume_Nov2022_v2.pdf" download>
            My Resume
          </ResumeContainer> */}
        </WorkContainer>
      </PageLayout>
    </>
  );
}
export default Home;
