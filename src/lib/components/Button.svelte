<script lang="ts">
	type LinkType = {
		label: string;
		href: string;
	};
	export let link: LinkType;
</script>

<a
	class="bg-[#2B7489] bg-opacity-60 transition-colors hover:bg-opacity-100 border border-[#2B7489] py-2 px-10 rounded-full"
	href={link.href}
>
	{link.label}
</a>
