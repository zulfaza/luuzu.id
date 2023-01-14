<script context="module" lang="ts">
	export type StoryCategoryType = {
		name: string;
		border: string;
		background: string;
	};
	export type StoryType = {
		title: string;
		description: string;
		slug: string;
		categories: StoryCategoryType[];
		thumbnail: string;
	};
</script>

<script lang="ts">
	import Button from '../Button.svelte';
	import Heading2 from '../Typography/Heading2.svelte';
	import StoryItem from './StoryItem.svelte';

	const stories: StoryType[] = [
		{
			title: 'Devlog ayolulus[0]',
			thumbnail: '/images/story.png',
			slug: 'devlog-ayolulus-0',
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
			],
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec egestas magna, eget volutpat erat. Ut sed maximus diam. Sed in metus convallis, fermentum quam nec, eleifend nisi. Nulla eu vehicula est. Vestibulum feugiat ipsum leo, a blandit mi pulvinar vitae. Cras semper turpis et risus mollis pharetra. Fusce vitae libero ullamcorper, auctor mi vitae, tincidunt felis. Sed nec dui eros. Curabitur vitae bibendum arcu. Vivamus eget imperdiet urna. Suspendisse ultricies, risus vitae lobortis mattis, nulla dui viverra tortor, eget vehicula tellus mauris id urna. Nam eget dolor lectus. Nullam ac felis lectus.'
		},
		{
			title: 'Devlog ayolulus[1]',
			thumbnail: '/images/story.png',
			slug: 'devlog-ayolulus-1',
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
			],
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec egestas magna, eget volutpat erat. Ut sed maximus diam. Sed in metus convallis, fermentum quam nec, eleifend nisi. Nulla eu vehicula est. Vestibulum feugiat ipsum leo, a blandit mi pulvinar vitae. Cras semper turpis et risus mollis pharetra. Fusce vitae libero ullamcorper, auctor mi vitae, tincidunt felis. Sed nec dui eros. Curabitur vitae bibendum arcu. Vivamus eget imperdiet urna. Suspendisse ultricies, risus vitae lobortis mattis, nulla dui viverra tortor, eget vehicula tellus mauris id urna. Nam eget dolor lectus. Nullam ac felis lectus.'
		}
	];
</script>

<section class="w-full py-10">
	<div class="container">
		<div class="flex-bc mb-8">
			<Heading2 title="#My story" />
			<Button
				link={{
					label: 'see more',
					href: '/stories'
				}}
			/>
		</div>
		<div class="flex gap-6 flex-col md:flex-row">
			{#each stories as story (story.slug)}
				<StoryItem {story} />
			{/each}
		</div>
	</div>
</section>
