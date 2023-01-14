<script lang="ts">
	import type { StoryCategoryType } from './StoryList.svelte';

	export let category: StoryCategoryType;
</script>

<div
	style={`border-color : ${category.border}; background : ${category.background}`}
	class="text-sm text-white px-4 rounded-full border opacity-80 hover:opacity-100 transition-opacity"
>
	{category.name}
</div>
