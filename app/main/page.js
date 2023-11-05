'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Workspace1 from '@/public/Brutalist/work3333.png';
import Workspace2 from '@/public/Brutalist/work3333slice_02.png';
import Workspace3 from '@/public/Brutalist/work3333slice_03.png';
import Scene from '@/components/ThreeScene/index';
import RadicalSVGAnimator from '../../components/SVGAnimator';
import NewsTicker from '../../components/Newsticker';

const Home = () => {
  return <NewsTicker></NewsTicker>;
};

export default Home;

const SiteGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  padding-top: 20rem;
  position: relative;
  mix-blend-mode: difference; // Damit können wir die z-index-Eigenschaft für die Kinder verwenden
  padding-left: 5.8rem;
  padding-right: 5.8rem;
`;

const Imagecontainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row: 1/-1;
`;

const Slice1 = styled(Image)`
  width: 100vw;
  z-index: 1;
  clip-path: polygon(100% 0, 100% 0%, 100% 100%, 50% 100%, 0 0);
  border-radius: 1rem;
`;

const Slice2 = styled(Image)`
  z-index: 1;
  clip-path: polygon(100% 0, 100% 0%, 50% 100%, 0 100%, 0 0);
  border-radius: 1rem;
`;

const Slice3 = styled(Image)`
  z-index: 1;

  border-radius: 1rem;
`;

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-image: url(/Brutalist/5df5c3fc-6770-46e8-9a0e-08f54a30088f.webp);
  opacity: 0.3;
`;
