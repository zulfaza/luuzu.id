<script context="module" lang="ts">
	export type IconLinkType = {
		type: string;
		icon: typeof Linkedin;
		href: string;
		click?: () => void;
	};
	export type IconButtonType = {
		type: string;
		icon: typeof Mail;
		click: () => void;
		href?: string;
	};
	export type IconType = IconLinkType | IconButtonType;
</script>

<script lang="ts">
	import ButtonWithPopup from './ButtonWithPopup.svelte';
	import Github from './Icons/Github.svelte';
	import Linkedin from './Icons/Linkedin.svelte';
	import Mail from './Icons/Mail.svelte';

	const icons: IconType[] = [
		{
			type: 'link',
			icon: Linkedin,
			href: 'http://linkedin.com/in/zul-faza-makarima'
		},
		{
			type: 'link',
			icon: Github,
			href: 'http://github.com/zulfaza'
		},
		{
			type: 'button',
			icon: Mail,
			click: () => {
				navigator.clipboard.writeText('zulfazamakarima@gmail.com');
			}
		}
	];
</script>

<footer class="w-full relative">
	<div class="container flex-cc gap-5 mb-4">
		{#each icons as icon}
			{#if icon.type === 'link'}
				<a href={icon.href} target="_blank" rel="noopener noreferrer">
					<svelte:component this={icon.icon} />
				</a>
			{:else if icon.type === 'button'}
				<ButtonWithPopup {icon} />
			{/if}
		{/each}
	</div>

	<div class=" absolute w-full left-0 bottom-0 h-2 bg-gradient-to-r from-[#4C88B4] to-[#002B5C]" />
</footer>
