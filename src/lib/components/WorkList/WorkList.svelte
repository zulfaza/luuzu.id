<script>
	import Button from '../Button.svelte';
	import Heading2 from '../Typography/Heading2.svelte';
	import WorkItem from './WorkItem.svelte';

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

<section class="py-10 container">
	<div class="flex-sc gap-4 lg:gap-6 mb-4">
		<Heading2 title="#My Works" />
		<div class="h-px w-full md:block hidden dark:bg-white bg-dark" />
	</div>
	<div class="flex md:flex-row flex-col gap-4 mb-12">
		{#each works as work (work.id)}
			<WorkItem {work} />
		{/each}
	</div>
	<div class="flex-cc">
		<Button
			link={{
				label: 'see more',
				href: '/works'
			}}
		/>
	</div>
</section>
