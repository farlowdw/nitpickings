import React from 'react';
import clsx from 'clsx';
import { blogPostContainerID } from '@docusaurus/utils-common';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import MDXContent from '@theme/MDXContent';

// added after swizzling
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
import { useLocation } from '@docusaurus/router';
// 

export default function BlogPostItemContent({ children, className }) {
  const { isBlogPostPage } = useBlogPost();

  // added after swizzling
  const { siteConfig } = useDocusaurusContext();
  const { forbiddenGiscusBlogPaths } = siteConfig.customFields;
  const { colorMode } = useColorMode();
  const location = useLocation();
  const giscus = (
    <React.Fragment>
      <hr />
      <br></br>
      <Giscus
        id="comments"
        repo="farlowdw/nitpickings"
        repoId="R_kgDOOJPrDg"
        category="Announcements"
        categoryId="DIC_kwDOOJPrDs4CoFVz"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
    </React.Fragment>
  )
  // 

  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx('markdown', className)}>
      <MDXContent>
        {children}
        {isBlogPostPage && !forbiddenGiscusBlogPaths.includes(location.pathname) && giscus}
      </MDXContent>
    </div>
  );
}
