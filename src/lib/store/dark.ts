import { writable } from 'svelte/store';

function createDarkMode() {
	const { subscribe, update, set } = writable(false);

	return {
		subscribe,
		toggle: () => update((prev) => !prev),
		set
	};
}

export const darkMode = createDarkMode();
