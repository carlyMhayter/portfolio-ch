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
  border: 1px solid var(--yellow);
  border-radius: 10px;
  padding: 0.5rem 3rem;
  margin: 0.5rem 0rem;
  text-align: center;
  background-image: linear-gradient(transparent, var(--yellow));
`;
const Text = styled.p`
  font-style: italic;
  font-weight: 600;
`;

const ResumeContainer = styled.a`
  border: 1px solid var(--yellow);
  border-radius: 10px;
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

          <ResumeContainer href="/HayterCarly_Resume_Nov2022_v2.pdf" download>
            My resume
          </ResumeContainer>
        </WorkContainer>
      </PageLayout>
    </>
  );
}
export default Home;
