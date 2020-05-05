<script>
    let synonyms = []
    //fetch data
    export let words
    $: if(words.length > 2) {
        fetch('https://api.datamuse.com/words?rel_rhy=' + words)
        .then( res => res.json() )
            .then( json => {
                console.log(json)
                synonyms = json
            } )
    }
</script>

<section>
    <h2>The value of the input field: {words}</h2>
    {#each synonyms as synonym}
        <p>{synonym.word}</p>
    {:else}
        <p>Please type a word or sentence in the input field</p>
    {/each}
</section>