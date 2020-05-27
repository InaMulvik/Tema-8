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
	<div>	
		<button on:click={()=> {what='synonyms';getWords()}}>Synonyms</button>
		<button on:click={()=>{what='antonyms';getWords()}}>Antonyms</button>
		<input placeholder='type something to find {what}' bind:value={words} on:input={getWords} on:click={vanish}>
	</div>
</header>

<section>
    {#each synonyms as synonym}
        <div>
            <h5>{synonym.word}</h5>
        </div>
    {:else}
        <p>Please type a word in the input field</p>
    {/each}
</section>

</main>
<style>
	main{
		display:grid;
		align-items:start;
		background-color: rgb(245, 255, 245);
	}
	header{
		display:grid;
		place-items:center;
		height:20vh;
	}
	button{
		cursor: pointer;
		background-color: rgba(117, 128, 117, 0.2);
		border: none;
		border-radius: 1.2rem 0 0 0;
		padding: .5rem 1rem;
	}
	button:hover{
		background-color: rgba(178, 236, 178, .7);
		transition: .5s ease;
	}
	input{
		width:40vw;
	}
    section{
        display: grid;
		align-items:start;
		justify-content: start;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }
    section > div{
        background-color: rgb(178, 236, 178, .7);
        display: grid;
        place-items: center;
        height: 100%;
    }
</style>