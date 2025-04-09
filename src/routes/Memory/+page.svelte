<script>
    let bluePoints = 0;
    let redPoints = 0;
    let flipCount = 0;
    let blueTurn = false;
    let cards = []
    let cane = "https://media.istockphoto.com/id/1358130261/sv/vektor/realistic-christmas-candy-cane-with-red-stripes-cute-cartoon-lollypop-sweet-on-white.jpg?s=612x612&w=0&k=20&c=MvF5KapisQHEqCu1wEnOepIaN8AHKlcauyQbCA4-u9I="
    let hat = "https://media.istockphoto.com/id/1066901056/vector/santa-claus-hat-flat-style-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=J2ijmJrS-Og6HscEaJN6vKJv-NqvZPv0QaLN1BnMblQ="
    let reindeer = "https://media.istockphoto.com/id/1351976317/sv/vektor/christmas-deer-in-ugly-sweater.jpg?s=612x612&w=0&k=20&c=Q7msbklygwviLozCZ2obD0I4yD9D_2FDCEnMtPVLWYg="
    let tree ="https://media.istockphoto.com/id/882074046/sv/vektor/cartoon-julgran-med-guldstj%C3%A4rna.jpg?s=612x612&w=0&k=20&c=jtOVp6wBm9gMRmGXjeoJ3rJwkKSVOPXa5wBPqvf5smQ="
    let snowflake="https://media.istockphoto.com/id/1395535483/vector/snowflake-snow-cute-weather-realistic-icon-3d-cartoon.jpg?s=612x612&w=0&k=20&c=RICCR98vowV_OgnbKhJdc2s3mzSFJWQrjur0VRQ_t-c="
    let mountain ="https://i.pinimg.com/736x/fd/09/f7/fd09f7c5093408bcdd7510347301920f.jpg"
    let images = [cane, hat, reindeer, tree, snowflake, mountain]
    let result = ""
    for (let i=0; i<12; i++) {
        cards.push({image: images[i%6], flipped: false, matched: false})
        shuffleArray(cards)
    }

    function reset(){
        redPoints=0;
        bluePoints=0;
        result = ""
        cards.forEach((card)=>{
            card.flipped=false
            card.matched=false
        })
        shuffleArray(cards)
        cards=cards
    }
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

    function flip(card)  {
        if(flipCount == 2) return;
        if(card.flipped) return;
        card.flipped = !card.flipped
        cards = cards
        flipCount++;
        if(flipCount == 2) {
            let flippedCards = cards.filter(card =>card.flipped && !card.matched)
            if (flippedCards[0].image== flippedCards[1].image){
                flippedCards[0].matched= true 
                flippedCards[1].matched=true
                if (blueTurn){
                    bluePoints++
                } else {
                    redPoints++
                }
            }
        
            setTimeout(() => {
                cards.forEach((card) => {
                        card.flipped = card.matched;
                });
                flipCount = 0;
                cards = cards;
                blueTurn=!blueTurn
                }, 1000);
        }
        if (bluePoints+redPoints==6){
            if (bluePoints<redPoints){
            result = "Red is the winner!"
                
            } else if (bluePoints>redPoints){
                result = "Blue is the winner!"

            } else {
                result = "It's a tie"
            }
        }
        
    }
</script>
<main>
    {#each cards as card}
    <div on:click={() => flip(card)} class="card" class:flipped={card.flipped}>
    
    <img alt="back" class="front" src="https://media.istockphoto.com/id/493085772/vector/snowman.jpg?s=612x612&w=0&k=20&c=2VtC2Ag5GB3WQ5xo_jWKuqDzURXCl_e9H80P7KS7bM0=">
    <img alt="front" class="back" src={card.image}>
    </div>
    {/each}

    <button on:click={() => reset()}>Reset</button>
</main>
<aside class="blue">
    <p>{bluePoints}</p>
</aside>
<aside>
    <p>{redPoints}</p>
</aside>
<aside class:blue = {blueTurn} class="turn">
    
</aside>
<p id="center">{result}</p>
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

    .card:hover {
        transform: scale(1.1);
        transition: transform 0.2s;
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

    #center {
        text-align: center;
    }

    button {
        background-color: black;
        padding:10px;
        border: 1px solid white;
    }

    
    @media (min-height: 500px){
        main{
            grid-template-columns: repeat(4, 100px);
            grid-template-rows: repeat(3, 100px);
        }
    }
    @media (max-height: 500px){
        main{
            grid-template-columns: repeat(6, 100px);
            grid-template-rows: repeat(2, 100px);
        }
    }
          

</style>