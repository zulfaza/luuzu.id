<script>
	import Header from '$lib/components/Header.svelte';
	import StoryList from '$lib/components/StoryList/StoryList.svelte';
	import WorkList from '$lib/components/WorkList/WorkList.svelte';
</script>

<svelte:head>
	<title>Luuzu.dev</title>
</svelte:head>

<Header />
<WorkList />
<StoryList />
