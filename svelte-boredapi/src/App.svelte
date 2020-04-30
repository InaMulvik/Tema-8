<script>
	import Activity from './components/Activity.svelte'
	let activity = {}
	let show = false
	let type = 'recreational'
	const getActivity = () => {
		show = false
		fetch('https://www.boredapi.com/api/activity?type=' + type)
			.then( res => res.json() )
				.then( json => {
					activity = json
					show = true
					} )
	}
</script>

<main>
	<button on:click={getActivity}>Click me</button>
	<input type="text" bind:value={type}>
	{#if show}
		<Activity {activity} />
	{:else}
		<h2>Nothing to see here</h2>
	{/if}
</main>

<style>
	main{
		display: grid;
		place-items: center;
		height: 100vh;
		position: relative;
	}
	button{
		position: absolute;
		top: 2rem;
		background: black;
		color: white;
		cursor: pointer;
		border-radius: 15%;
	}
</style>