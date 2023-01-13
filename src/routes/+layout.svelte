<script>
	import '../app.css';
	import { browser } from '$app/environment';
	import Navbar from '$lib/Navbar.svelte';
	import { darkMode } from '$lib/store/dark';
	import Footer from '$lib/components/Footer/Footer.svelte';
	const loadDarkModeFromLocalStorage = () => {
		if (!browser) return;
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		)
			darkMode.set(true);
		else darkMode.set(false);
	};
	loadDarkModeFromLocalStorage();
	// update class on parent if darkmode change
	$: if (browser) {
		if ($darkMode) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}
</script>

<div class="flex-col flex-sc">
	<Navbar />
	<main class="w-full">
		<slot />
	</main>
	<Footer />
</div>
