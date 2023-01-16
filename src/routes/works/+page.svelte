<script>
	import MyWorks from '$lib/assets/icons/MyWorks.svelte';
	import WorkItem from '$lib/components/WorkList/WorkItem.svelte';
	import WorkList from '$lib/components/WorkList/WorkList.svelte';

	const works = [
		{
			title: 'Spotify Clone',
			thumbnail: '/images/spotify-clone.png',
			id: 'spotify-clone',
			categories: [
				{
					name: 'Open source',
					border: '#3C9F3C',
					background: '#3C9F3C99'
				},
				{
					name: 'typescript',
					border: '#2B7489',
					background: '#2B748999'
				},
				{
					name: 'nextjs',
					background: '#00050699',
					border: '#798183'
				}
			]
		},
		{
			title: 'Joints.id',
			thumbnail: '/images/joints.png',
			id: 'joints-id',
			categories: [
				{
					name: 'Open source',
					border: '#3C9F3C',
					background: '#3C9F3C99'
				},
				{
					name: 'typescript',
					border: '#2B7489',
					background: '#2B748999'
				},
				{
					name: 'nextjs',
					background: '#00050699',
					border: '#798183'
				}
			]
		},
		{
			title: 'Fisikasik',
			thumbnail: '/images/fisikasik.png',
			id: 'fisikasik',
			categories: [
				{
					name: 'Open source',
					border: '#3C9F3C',
					background: '#3C9F3C99'
				},
				{
					name: 'typescript',
					border: '#2B7489',
					background: '#2B748999'
				},
				{
					name: 'nextjs',
					background: '#00050699',
					border: '#798183'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>#My Works</title>
</svelte:head>

<header class="flex-cc flex-col w-full pt-36 pb-20">
	<div class="mb-20 text-dark dark:text-white max-w-md w-full h-full">
		<MyWorks />
	</div>
	<div class="container">
		<div class="grid md:grid-cols-4 lg:grid-cols-3 gap-8 mb-12">
			{#each works as work (work.id)}
				<WorkItem {work} />
			{/each}
			{#each works as work (work.id)}
				<WorkItem {work} />
			{/each}
			{#each works as work (work.id)}
				<WorkItem {work} />
			{/each}
		</div>
	</div>
</header>
