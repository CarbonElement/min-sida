
<script>
    /** @type {import('./$types').PageData} */
    export let data;
  </script>
  
  {#await data}
    <p>.. waiting</p>
  {:then pokemon} 
  <h1>{pokemon.response.name}</h1>
  <article>
    {#each Object.entries(pokemon.response.sprites) as sprites}
      {#if typeof sprites[1] == "string"}
      <img src={sprites[1]} />
      {/if}
    {/each}
  </article>
  
  <section>
    <div class="info">
    <h1>Base stats</h1>
    {#each pokemon.response.stats as stats}
    <p>{stats.stat.name}: {stats.base_stat}</p>
  {/each}
    </div>
    <div class="info">
        <h1>Abilities</h1>
        {#each pokemon.response.abilities as abilities}
        <p>{abilities.ability.name}</p>
      {/each}
    </div>
    <div class="info">
        <h1>Items</h1>
        {#each pokemon.response.held_items as held_items}
        <p>{held_items.item.name}</p>
        {/each}
    </div>
  </section>
  
  {/await}  
  
  
<style>
    article {
        display: flex;
        height: 30%;
        width: 90%;
        gap: 1em;
    }

    h1::first-letter {
    text-transform: capitalize;
}
h1 {
    color: black;
}
p {
    color: black;
}
p::first-letter {
    text-transform: capitalize;
}
section {
    width:100%;
    display: flex;
    justify-content: space-evenly;
}
</style>