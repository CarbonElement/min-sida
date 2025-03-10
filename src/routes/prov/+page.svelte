<script>
    let number = 7
    let array = Array(number)
    function change() {
        array = Array(number)
    }
</script>
<style>
.container {
    margin: auto;
    height: 70vh;
    width: 60vw;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 20px;
}
.grid-item {
    background-color: red;
}

.grid-item:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 4;
}


li {
    color: black;
    list-style-position: inside;
    list-style-type:disc;
    margin: 10px;
}
input {
    color:black;
}

</style>

<main>
    <input type="number" bind:value={number} on:click={() => change()}>
    <div class="container">  
        {#each array as _, i}
            <div class="grid-item" >
                <ul>
                    {#each Array(i) as _, j}
                    <li>{j}</li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</main>