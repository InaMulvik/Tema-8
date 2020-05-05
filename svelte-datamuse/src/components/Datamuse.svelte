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
    <h2>Results from datamuse: {words}</h2>
</section>