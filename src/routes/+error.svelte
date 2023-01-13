<script>
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Error 404</title>
</svelte:head>

<div class="w-full min-h-screen flex-cc col">
	<h1 class="text-[128px] leading-[152px] font-extrabold">404</h1>
	<h2 class="font-bold text-xl">Error Not Found</h2>
	<div class="flex-cc mt-4">
		<Button
			link={{
				label: 'Back to home',
				href: '/'
			}}
		/>
	</div>
</div>
