<script lang="ts">
	import Tailwindcss from './Tailwindcss.svelte';
	import Header from './components/Header.svelte';

	export let name: string;
</script>

<Tailwindcss />
<Header />
<main class="pt-16">
	<div class="container mx-auto px-6 my-4">
		<h1>Hello {name}!</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	</div>	
</main>

