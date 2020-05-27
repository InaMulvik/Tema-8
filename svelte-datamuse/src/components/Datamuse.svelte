<script>
    let synonyms = []
    //fetch data
    export let words
    $: if(words.length > 2) {
        fetch('https://api.datamuse.com/words?ml=' + words)
        .then( res => res.json() )
            .then( json => {
                console.log(json)
                synonyms = json
            } )
    }
</script>

<section>
    {#each synonyms as synonym}
        <div>
            <h5>{synonym.word}</h5>
        </div>
    {:else}
        <div>
            <p>Please type a word or sentence in the input field</p>
        </div>
    {/each}
</section>

<style>
    section{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
    }
    section > div{
        background-color: rgb(178, 236, 178, .7);
        display: grid;
        place-items: center;
        height: 100%;
    }
</style>