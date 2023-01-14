<script lang="ts">
	import StoryCategory from './StoryCategory.svelte';
	import type { StoryType } from './StoryList.svelte';

	export let story: StoryType;
</script>

<div class="border w-full border-divider bg-dark-200 rounded-[10px] overflow-hidden">
	<div class=" aspect-w-16 aspect-h-9 w-full">
		<img src={story.thumbnail} alt={`Preview ${story.title}`} />
	</div>
	<div class="relative w-full pt-8 pb-10 px-4">
		<div class=" absolute w-full left-0 top-0 h-1 bg-gradient-to-r from-[#4C88B4] to-[#002B5C]" />
		<div class="flex flex-wrap gap-2 mb-4">
			{#each story.categories as category}
				<StoryCategory {category} />
			{/each}
		</div>
		<div class="mb-3">
			<a
				class="text-white font-extrabold uppercase text-lg md:text-4xl truncate w-full block"
				href={`/story/${story.slug}`}
			>
				{story.title}
			</a>
		</div>
		<div>
			<p class="text-[#979696] line-clamp-3 text-sm">
				{story.description}
			</p>
		</div>
	</div>
</div>
