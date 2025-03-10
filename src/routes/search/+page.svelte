 <script>
    import { goto } from "$app/navigation";
    let search;
    let pastSearches = [];
    if (typeof window !== 'undefined') {
       pastSearches = sessionStorage.getItem("pastSearches") || [];
    }
    function doSearch(){
        pastSearches.push(search)
        sessionStorage.setItem("pastSearches", pastSearches)
        goto('/search/'+search.toLowerCase())
    }
 </script>
 <form on:submit|preventDefault={()=> doSearch()}>
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
  </form>
  {#each pastSearches as search}
    <p>{search}</p>
{/each}
<style>
    input {
        color: black;
        border: 3px solid black;
        border-radius: 10px;
    }
</style>
