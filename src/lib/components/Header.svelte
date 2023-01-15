<script>
	import Logo from '$lib/assets/icons/luuzu.svelte';
	import { ChevronsDownIcon } from 'svelte-feather-icons';
</script>

<header
	class="container flex-col flex py-10 dark:text-white text-dark flex-cc relative min-h-screen"
>
	<h1 class=" absolute z-0 opacity-0">Luuzu.dev</h1>
	<div class="w-full sm:max-w-md">
		<Logo />
	</div>
	<div class="animate-bounce absolute bottom-10">
		<ChevronsDownIcon class="md:w-[85px] md:h-[85px] w-[35px] h-[35px]" strokeWidth={0.75} />
	</div>
</header>
