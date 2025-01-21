import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Container from '../shared/Container';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  path: string
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Save Locally',
    Svg: require('@site/static/img/svg/local.svg').default,
    description: (
      <>
        You can store uploaded files directly locally on the machine.
      </>
    ),
    path: "/img/svg/local.svg",
  },
  {
    title: 'Upload to AWS S3',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        With lancer you can upload your media to AWS S3 without any hassel
      </>
    ),
    path: "/img/svg/s3.svg",
  },
  {
    title: 'Integrate with your existing stack',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        You can use our community SDKs to integrate with your backend services.
      </>
    ),
    path: "/img/svg/cogs.svg",
  },
];

function Feature({ title, Svg, description, path }: FeatureItem) {
  return (
    <div className={clsx('flex flex-col gap-16 font-dmono w-max items-center justify-center')}>
      <div className="text--center">
        <img src={path} className=' w-[100px]' />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className=' font-dmono text-xl mb-3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <Container>
      <section className={"flex items-center lg:gap-0 gap-10 flex-wrap lg:flex-nowrap py-[32px] w-full bg-dark"}>

        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}

      </section>
    </Container>
  );
}
