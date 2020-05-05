<script>
    //fetch data
    export let words
    fetch('https://api.datamuse.com/words?ml=' + words)
</script>

<section>
    <h2>Results from datamuse: {words}</h2>
</section>