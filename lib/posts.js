import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
const api = new GhostContentAPI({
	url: `${process.env.NEXT_GHOST_BLOG_URL}`,
	key: `${process.env.NEXT_GHOST_CONTENT_API_KEY}`,
	version: 'v5.0',
});

export async function getPosts() {
	return await api.posts
		.browse({
			limit: 'all',
		})
		.then((posts) => {
			posts.forEach((post) => {
				console.log(post.title);
			});
		})
		.catch((err) => {
			console.error(err);
		});
}
