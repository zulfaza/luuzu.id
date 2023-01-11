<script>
	import Logo from '$lib/assets/icons/luuzuLogo.svelte';
	import { SunIcon, MoonIcon, MenuIcon } from 'svelte-feather-icons';
	import { darkMode } from '$lib/store/dark';
	let links = [
		{
			link: '/works',
			label: 'works'
		},
		{
			link: '/blog',
			label: 'blog'
		},
		{
			link: '/about',
			label: 'about'
		}
	];
</script>

<nav
	class="fixed top-5 container flex-bc dark:bg-dark-200 bg-gray-200 dark:border-white border-gray-400 border-opacity-30 dark:border-opacity-30 border py-3 px-4 rounded-lg z-50"
>
	<div class="w-10 dark:text-white text-dark">
		<a href="/"> <Logo /></a>
	</div>
	<div class="md:flex gap-5 hidden">
		{#each links as link}
			<a href={link.link}>{link.label}</a>
		{/each}
	</div>
	<div class="flex-ec gap-1">
		<button on:click={darkMode.toggle}>
			{#if $darkMode}
				<SunIcon />
			{:else}
				<MoonIcon />
			{/if}
		</button>
		<button class="md:hidden block">
			<MenuIcon />
		</button>
	</div>
</nav>
