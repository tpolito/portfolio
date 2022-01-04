import { variables } from './variables';

const headers = {
	Accept: 'application/vnd.github.v3+json',
	Authorization: `token ${variables.viteGithubToken}`
};

export async function fetchRecentRepos() {
	const repos = await fetch('https://api.github.com/users/tpolito/repos?sort=updated&per_page=3', {
		headers
	});
	const repoData = await repos.json();
	const commitUrls = repoData.map((repo) => {
		return repo.commits_url.slice(0, -6);
	});

	const commits = await Promise.all(
		commitUrls.map(async (commit) => {
			const commitData = await fetch(`${commit}?per_page=5`, { headers });
			return commitData.json();
		})
	);

	// return only last 4 latest commits
	return commits
		.flat(Infinity)
		.sort((a, b) => {
			return new Date(b.commit.author.date).getTime() - new Date(a.commit.author.date).getTime();
		})
		.splice(0, 4);
}
