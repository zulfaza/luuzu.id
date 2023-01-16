<script lang="ts">
	import type { WorkType } from './type';
	import WorkCategory from './WorkCategory.svelte';

	export let work: WorkType;
</script>

<div
	class="border w-full dark:border-divider border-opacity-30 border-gray-400 bg-gray-200 text-dark-200 dark:text-white dark:bg-dark-200 rounded-[10px] overflow-hidden"
>
	<div class=" aspect-w-16 aspect-h-9 w-full">
		<img src={work.thumbnail} alt={`Preview ${work.title}`} />
	</div>
	<div class="relative w-full pt-8 pb-10 px-4">
		<div class=" absolute w-full left-0 top-0 h-1 bg-gradient-to-r from-[#4C88B4] to-[#002B5C]" />
		<div class="mb-3">
			<a
				class="font-extrabold uppercase text-lg md:text-4xl truncate w-full block"
				href={`/works/${work.id}`}
			>
				{work.title}
			</a>
		</div>
		<div class="flex flex-wrap gap-2">
			{#each work.categories as category}
				<WorkCategory {category} />
			{/each}
		</div>
	</div>
</div>
