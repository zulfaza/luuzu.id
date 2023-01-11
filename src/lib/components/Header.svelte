<script>
	import Logo from '$lib/assets/icons/luuzu.svelte';
	import { ChevronsDownIcon } from 'svelte-feather-icons';
</script>

<header
	class="container flex-col flex py-10 dark:text-white text-dark flex-cc relative min-h-screen"
>
	<h1 class=" absolute z-0 opacity-0">Luuzu.dev</h1>
	<Logo />
	<div class=" absolute bottom-10">
		<ChevronsDownIcon strokeWidth={0.75} size={'85'} />
	</div>
</header>
