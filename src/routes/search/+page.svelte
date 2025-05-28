 <script>
    import { goto } from "$app/navigation";
    import { base } from '$app/paths';
    let search;
    let pastSearches = [];
    if (typeof window !== 'undefined') {
       pastSearches = JSON.parse(sessionStorage.getItem("pastSearches")) || [];
       console.log(pastSearches)
    }
    function doSearch(){
        if (pastSearches.length == 5) {
            pastSearches.shift()
        }
        pastSearches.push(search)
        pastSearches = pastSearches.filter((item, index) => pastSearches.indexOf(item) === index);
        pastSearches.sort()
        sessionStorage.setItem("pastSearches", JSON.stringify(pastSearches))
        goto(base + '/search/'+search.toLowerCase())
    }

    function reset() {
        pastSearches = []
        sessionStorage.clear()
    }
 </script>
 <form on:submit|preventDefault={()=> doSearch()}>
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
  </form>
  
<footer>
    <h2>Past searches:</h2>
    {#each pastSearches as search}
    <ul>
        <li><a href={base +'/search/'+search.toLowerCase()}>{search}</a></li>
    </ul>
    
{/each}
<button on:click={() => reset()}>Reset</button>
</footer>
<style>
    input {
        color: black;
        border: 3px solid black;
        border-radius: 10px;
    }

    footer {
        position: fixed;
        bottom: 0;
        width: 100vw;
        height: 25vh;
        background-color: rgb(136, 128, 250);
        border: 3px solid black;
        text-align: center;
    }
    button {
        background-color: gray;
        border: 1px solid black;
        padding:4px;
    }
    a:hover {
        display: inline-block;
        background-color: red;
        transform: scale(1.1)
    }
</style>
