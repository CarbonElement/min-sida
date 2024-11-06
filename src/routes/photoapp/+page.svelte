<script> 
let image = "https://picsum.photos/id/70/367/267"
let photo = "https://picsum.photos/id/88/367/267"
let picture = "https://picsum.photos/id/93/367/267"
</script>

<h1>Photoapp</h1>
<p>Denna sida innehåller <strong>fina</strong> bilder</p>
<div class="photos">
    <div class="image-wrapper"><img src={image} alt="Flexbox egenskaper"></div>
    <div class="image-wrapper"><img src={photo} alt="Flexbox cheatsheet"></div>
    <div class="image-wrapper"><img src={picture} alt="Flexbox egenskaper"></div>
</div>
<style>
        h1{
        text-align: center;
        font-size: 50px;
        margin: 20px;
        color: grey;
    }
    .photos{
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 100vw;
        overflow: hidden;
        flex-wrap: wrap;
        background-color: gray;
    }
    .image-wrapper img{
        width: 100%;
        border-radius: 20px;
        box-shadow: 4px 8px 0px rgba(0,0,0,0.2);
    }
    .image-wrapper{ 
        transition: transform 0.1s, flex-shrink 0.3s, flex-grow 0.3s;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 300px;
        margin: 10px;
    }
    .image-wrapper:hover {
        flex-grow: 2;
        flex-shrink: 0;
    }
    .image-wrapper:active { 
        transform: scale(0.9); 
    }
</style>