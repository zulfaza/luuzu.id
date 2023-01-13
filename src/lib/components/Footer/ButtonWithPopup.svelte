<script lang="ts">
	import type { IconType } from './Footer.svelte';
	import { fade, fly } from 'svelte/transition';
	export let icon: IconType;
	let popup = false;
	const handleClick = () => {
		popup = true;
		setTimeout(() => {
			popup = false;
		}, 800);
		if (icon.click) icon.click();
	};
</script>

<button on:click={handleClick} class="relative">
	{#if popup}
		<div out:fade in:fly class=" absolute -top-5 -right-16 text-sm bg-[#4C88B4] rounded-full px-4">
			copied
		</div>
	{/if}
	<svelte:component this={icon.icon} />
</button>
