<script>
    let synonyms = []
	
	let words
	let what = 'synonyms'
	$: operator = what == 'synonyms' ? 'ml' : 'rel_ant'
	
	const getWords = () => {
		operator = what == 'synonyms' ? 'ml' : 'rel_ant'
		if(words.length > 2) {
			fetch(`https://api.datamuse.com/words?${operator}=${words}`)
			.then( res => res.json() )
				.then( json => {
					console.log(json)
					synonyms = json
				} )
		}else{
			synonyms = []
		}
	}
	const vanish = event => {
		event.target.placeholder=""
	}
</script>

<main>

<header>
	<div class="buttons">
		<button on:click={()=> {what='synonyms';getWords()}}>Synonyms</button>
		<button on:click={()=>{what='antonyms';getWords()}}>Antonyms</button>
	</div>
	<div>
		<input placeholder='type something to find {what}' bind:value={words} on:input={getWords} on:click={vanish}>
		<p>Please type a word in the input field (US English only)</p>
	</div>
</header>

<section>
    {#each synonyms as synonym}
        <div>
            <h5>{synonym.word}</h5>
        </div>
    {/each}
</section>

</main>
<style>
	:global(body){
		background-color: rgb(245, 255, 245);
	}
	main{
		display:grid;
		align-items:start;
	}
	header{
		display:grid;
		place-items:center;
		height:20vh;
	}
	p{
		text-align: center;
		padding-top: .5rem;
		margin: auto;
	}
	header > div{
		margin: auto;
		padding: none;
	}
	.buttons{
		padding-top: 3.9rem;
		padding-right: 34.5rem;
	}
	button{
		cursor: pointer;
		background-color: rgba(151, 165, 151, 0.7);
		border: none;
		border-radius: 1.6rem 0 0 0;
		padding: .5rem 1rem;
	}
	button:hover{
		background-color: rgba(178, 236, 178, .9);
		transition: .5s ease;
	}
	input{
		width:40vw;
		height: 4.5vh;
	}
    section{
        display: grid;
		align-items:start;
		justify-content: start;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }
    section > div{
        background-color: rgb(178, 236, 178, .9);
        display: grid;
        place-items: center;
        height: 100%;
    }
</style>