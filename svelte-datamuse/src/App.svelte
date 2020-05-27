<script>
	import Datamuse from './components/Datamuse.svelte'
	let words = ''
	const hei = event => {
		event.target.placeholder=""
	}
</script>

<main>
	<div class="tab">
		<button class="tablinks" onclick="openSynonyms(event, 'synonyms')">Synonyms</button>
		<button class="tablinks" onclick="openAntonyms(event, 'antonyms')">Antonyms</button>
	</div>
	<div id="synonyms" class="tabcontent">
		<div class="input">
		<input type="text" placeholder="get synonyms" bind:value={words} on:click={hei}>
	</div>
	<Datamuse {words}/>
	</div>
	<div id="antonyms" class="tabcontent">
	<div class="input">
		<input type="text" placeholder="get antonyms" bind:value={words} on:click={hei}>
	</div>
	</div>
</main>

<style>
	main{
		background-color: rgb(245, 255, 248);
		display: grid;
		grid-template-rows: 10vh 90vh;
	}
	.tab{
		overflow: hidden;
		border: none;
		outline: none;
		display: grid;
		place-items: center;
	}
	.tab button{
		background-color: inherit;
		border: none;
		outline: none;
		cursor: pointer;
		padding: 1rem 1.2rem;
		transition: 0.3s ease;
	}
	.tab button:hover{
		background-color: rgb(178, 236, 178, .7);
	}
	.input{
		display: grid;
		place-items: center;
	}
	input{
		width: 40vw;
		font-size: 1.2rem;
		padding: .8rem;
		outline: none;
		border-radius: 1rem;
	}
</style>