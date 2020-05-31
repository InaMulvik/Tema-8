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
		<input placeholder='(US English only) {what}' bind:value={words} on:input={getWords} on:click={vanish}>
	</div>
	<div>
		
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
		height:100%;
	}
	header > div{
		margin: auto;
		padding: none;
	}
	.buttons{
		display: grid;
		grid-template-columns: 10rem 10rem;
		gap: .2rem;
		width: 100vw;
		padding-top: .3rem;
	}
	button{
		cursor: pointer;
		background-color: rgb(163, 185, 163);
		border: none;
		border-radius: 1.6rem 0 0 0;
		padding: .5rem 1rem;
	}
	button:hover{
		background-color: rgba(178, 236, 178, .9);
		transition: .3s ease;
	}
	input{
		width:40vw;
		place-items:center;
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