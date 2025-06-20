import React from 'react';
import { useMediaQuery, Box, Typography, Avatar } from '@mui/material';
import Link from '@docusaurus/Link';
import DocsLink from '@site/src/components/DocsLink';

const ResponsiveAboutAvatar = () => {
	const isSmallScreen = useMediaQuery('(max-width:1000px)');

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: isSmallScreen ? 'column-reverse' : 'row',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4">About Daniel Farlow</Typography>
        <Typography component={'div'}>
            Hey there! Thanks for stopping by. What's this site all about and who is Daniel Farlow anyway? Glad you asked! I'm the author of this site, a site dedicated to software engineering that aims to be a sort of daybook that other practicing engineers may find useful (or people thinking about becoming engineers). It's not a secret that tech websites and <Link to="https://github.com/kilimchoi/engineering-blogs">engineering blogs</Link> can be treasure troves of information. My hope is that this site could be that treasure trove for you or someone else.
        </Typography>
        <Typography component={'div'} sx={{ marginTop: '20px' }}>
            <em>Anyone</em> can write software. You don't need a fancy degree or special credentials. In fact, <DocsLink to="/resume" target="_blank">check out my resume</DocsLink> &#8212; I don't have a degree in computer science! I do have a degree in math, which can help sometimes, but the most important thing (in my opinion) is to have endless curiosity and an insatiable desire to learn. I've been a software engineer for a few years now, and its rich ecosystem never ceases to amaze me. Software engineering uniquely empowers individuals and communities alike to exercise their creative, analytic, and imaginative faculties to build life-changing products and services for the common good. My goal in working on this site is to try to convey some of the lessons I've learned (and continue to learn) through different kinds of written posts.
        </Typography>
        <Typography component={'div'} sx={{ marginTop: '20px' }}>
            The daybook (i.e., the <DocsLink to="/docs/intro">core content</DocsLink>) will often concern matters of general interest (e.g., <DocsLink to="/docs/sql/window-functions" target="_blank">using window functions in SQL</DocsLink>) while <DocsLink to="/blog/archive">Nit Wits</DocsLink> (i.e., blog posts) will largely concern various problems I've run into that required me to engineer a solution (e.g., <DocsLink to="/blog/2023/03/29/2023/virtual-box-mac-ubuntu-shared" target="_blank">how to install a VM on a Mac with shared folders using VirtualBox</DocsLink>). This site is a work in progress and there are many more posts I hope to make in the very near future.
        </Typography>
			</Box>
			<DocsLink to="/resume" target="_blank">
				<Avatar
					src={require('@site/static/img/headshot.jpeg').default}
					alt="Daniel Farlow"
					sx={{
						borderRadius: '50%',
            marginLeft: isSmallScreen ? '0px' : '10px',
            marginBottom: isSmallScreen ? '10px' : '0px',
						height: 130,
						width: 130,
						ml: 2,
						mt: isSmallScreen ? 2 : 0,
					}}
				/>
			</DocsLink>
		</Box>
	);
};

export default ResponsiveAboutAvatar;
