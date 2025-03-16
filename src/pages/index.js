import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.scss';
import Button from '@mui/material/Button';

const features = [
  {
    title: 'Everyman',
    content:
    `This is very much an "Everyman" site for anyone on a coding journey. I may come from a non-traditional background (I don't have a degree in Computer Science), but I love to learn, and I'd love to invite others to learn with me and benefit from anything useful I might have to say on the matter. This site is an ordinary person's journey into the wonderfully diverse and thought-provoking field of software engineering.`,
  },
  {
    title: 'Daybook',
    content:
    "Have you ever worked for hours, maybe even days, on a problem, and decided that the end result you discovered is so obvious you couldn't possibly forget it so you never recorded it for future use or reference? I have! Many of the core pages on this site are dedicated to documenting various things I do not want to forget (e.g., data structures and algorithms).",
  },
  {
    title: 'Nit Wits',
    content:
    `What might you call it when an everyman makes a witticism? A nit wit! What do you get when you collect most of them in the same place? In my case, a blog: Nit Wits! Posts on my blog represent standalone content (more or less) and are written at no particular cadence. I do, however, try to write "daily nitpickings" within my daybook, where I try to remark upon at least one thing I learned each day.`,
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={'/'}
      description={'Software engineering handbook landing page.'}
    >
      <div className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--sm')}
            alt="Software Engineering Handbook logo"
            src={useBaseUrl('img/logo.svg')}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.getStarted} >
            <Button variant="contained" color="inherit">
              <Link className={styles.checkItOut} to={useBaseUrl('docs/intro')}>
                <span style={{ fontFamily: 'IBM Plex Sans' }}>Start Picking</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div key={idx} className={clsx('col col--4', styles.feature)}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Home;