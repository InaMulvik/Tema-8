<script>
	import Datamuse from './components/Datamuse.svelte'
	let words = ''
</script>

<main>
	<input type="text" bind:value={words}>
	<Datamuse {words}/>
</main>

<style>
</style>