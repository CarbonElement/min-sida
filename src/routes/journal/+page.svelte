<script>

</script>

<main>
    <section class="recent">
        <h2>Recent sessions</h2>
        <button class="add">+</button>
        <div class="sessions">
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
        </div>
        <a class="link" href="/journal/sessions">Show all</a>
    </section>
    <section class="stats-main">
        <h2>Statistics </h2>
        <a class="link more" href="/journal/">More</a>
        <div class="stats"></div>
    </section>
</main>

<style>
    .link {
        padding-top:15px;
        color:blue;
        font-size: 0.8em;
        text-decoration: underline;
    }

    .more {
        position: absolute;
        right: 6%;
        font-size: 0.8em;
        text-decoration: underline;
    }
    h2 {
        color:black;
        font-size: 1.3em;
        display: inline;
    }
    p {
        color: black;
        font-size: 1.5em;
        
    }
    main {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
    }

    .recent {
        margin-top: 30px;
        margin-left: 20px;
        height: 30%;
        width: 100%;
    }

    .stats-main {
        margin-top: 30px;
        margin-left: 20px;
        height: 50%;
        width: 100%;
    }

    .stats {
        margin-top: 15px;
        height: 65%;
        width: 90%;
        border: 2px solid #75BCFF;
        border-radius: 10px;
    }
    .add {
        color: black;
        position: absolute;
        font-size: 20px;
        font-style: bold;
        right: 6%;
        border: 2px solid black;
        width: 20px;
        height: 20px;
        line-height: 10px;
        text-align: center;
        font-weight: bold;
    }
    .sessions {
        margin-top: 15px;
        height: 65%;
        width: 90%;
        border: 2px solid #75BCFF;
        border-radius: 10px;
        display: flex; /* Enables flexbox layout */
        justify-content: space-between; /* Adds space between the squares */
        align-items: center; /* Vertically centers the squares */
        padding: 10px; /* Adds padding inside the container */
        box-sizing: border-box; /* Ensures padding is included in dimensions */
    }

    .square {
        width: 20%; /* Adjust size as needed */
        aspect-ratio: 1; /* Ensures the square shape */
        background-color: #75BCFF; /* Example background color */
        border: 2px solid #000; /* Optional border */
        border-radius: 5px; /* Optional rounded corners */
    }
</style>