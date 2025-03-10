<script>
    let bluePoints = 0;
    let redPoints = 0;
    let flipCount = 0;
    let blueTurn = false;
    let cards = []
    for (let i=0; i<12; i++) {
        cards.push({image: "favicon.png", flipped: false, matched: false})
    }

    function flip(card)  {
        card.flipped = !card.flipped
        cards = cards
    }
</script>
<main>
    {#each cards as card}
    <div on:click={() => flip(card)} class="card" class:flipped={card.flipped}>
    <img alt="front" class="front" src={card.image}>
    <img alt="back" class="back" src="https://previews.123rf.com/images/captainvector/captainvector1703/captainvector170311727/74440143-lightning-with-cloud-icon.jpg">
    </div>
    {/each}
</main>
<aside class="blue">
    <p>{bluePoints}</p>
</aside>
<aside>
    <p>{redPoints}</p>
</aside>
<aside class:blue = {blueTurn} class="turn">
    
</aside>
<style>
    main {
        margin: 30px;
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(4, 100px);
    }
    .card {
        height: 80%;
        width: 80%;
        border: 1px solid black;
        background-color: transparent;
        position: relative;
        overflow:hidden;
        transform-style: preserve-3d;
        transition: transform 0.5s;

        
    }
    .card img {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        transition: transform 0.5s;
    }

    .flipped .front{
   transform: rotateY(180deg);


    }



    .flipped .back{
        transform: rotateY(0deg);


    }

    
    aside{
        width: 100px;
        height: 100px;
        position: fixed;
        bottom: 10px;
        right: 10px;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .back {
        transform:rotateY(180deg);


    }

    .front {
        transform:rotateY(0deg);

    }

    .blue {
        left:10px;
        background-color: blue;
    }

    p{
        font-size: 30px;
    }
        
    .turn {
        box-shadow: 0 0 10px 10px yellowgreen;
        z-index: -1;
    }

</style>