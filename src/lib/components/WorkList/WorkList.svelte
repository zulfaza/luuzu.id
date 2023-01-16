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
					background: '#0a6d27'
				},
				{
					name: 'typescript',
					border: '#2B7489',
					background: '#0f5360'
				},
				{
					name: 'nextjs',
					background: '#0b0f10',
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
					background: '#0a6d27'
				},
				{
					name: 'typescript',
					border: '#2B7489',
					background: '#0f5360'
				},
				{
					name: 'nextjs',
					background: '#0b0f10',
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
					background: '#0a6d27'
				},
				{
					name: 'typescript',
					border: '#2B7489',
					background: '#0f5360'
				},
				{
					name: 'nextjs',
					background: '#0b0f10',
					border: '#798183'
				}
			]
		}
	];
</script>

<section class="py-10 container">
	<div class="flex-sc gap-4 lg:gap-6 mb-4 dark:text-white text-dark-200">
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
