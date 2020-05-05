<script>
    //fetch data
    export let words
    fetch('https://api.datamuse.com/words?ml=' + words)
        .then( res => res.json() )
            .then( json => console.log(json) )
</script>

<section>
    <h2>Results from datamuse: {words}</h2>
</section>