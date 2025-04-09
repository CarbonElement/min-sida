<script>
    let time = '';
    let date = '';
    let sleep = 0;
    let nutrition = 0;
    let feel = 0;

    function setSleep(value) {
        sleep = value;
    }

    function setNutrition(value) {
        nutrition = value;
    }

    function setFeel(value) {
        feel = value;
    }
</script>
<main>
    <div class="container">
        <h1>New session</h1>
        
        <label for="date">Date:</label>
        <input type="date" id="date" bind:value={date} />

        <label for="time">Time:</label>
        <input type="time" id="time" bind:value={time} />

        <label for="sleep">Sleep:</label>
        <div class="stars">
            {#each Array(5).fill(0).map((_, i) => i) as i}
                <span 
                    class="star {i < sleep ? 'filled' : ''}" 
                    on:click={() => setSleep(i + 1)}>
                    ★
                </span>
            {/each}
        </div>

        <label for="nutrition">Nutrition:</label>
        <div class="stars">
            {#each Array(5).fill(0).map((_, i) => i) as i}
                <span 
                    class="star {i < nutrition ? 'filled' : ''}" 
                    on:click={() => setNutrition(i + 1)}>
                    ★
                </span>
            {/each}
        </div>

        <label for="feel">Feel:</label>
        <div class="stars">
            {#each Array(5).fill(0).map((_, i) => i) as i}
                <span 
                    class="star {i < feel ? 'filled' : ''}" 
                    on:click={() => setFeel(i + 1)}>
                    ★
                </span>
            {/each}
        </div>
        
        <label for="image">Workout details:</label>
        <input type="file" id="image" accept="image/*" />

        <label for="notes">Notes:</label>
        <textarea id="notes" rows="2" placeholder="Write your notes here..."></textarea>

        <button type="button">Add</button>
    </div>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f9f9f9;
        padding: 10px;
        box-sizing: border-box;
    }

    .container {
        color: black;
        max-width: 600px;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 12px;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
        font-family: Arial, sans-serif;
    }

    h1 {
        margin-bottom: 15px;
        font-size: 1.8rem;
        color: #333;
    }

    label {
        display: block;
        margin-bottom: 8px;
        font-size: 1rem;
        color: #555;
        text-align: left;
    }

    input, button, textarea {
        margin-bottom: 12px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
        width: 100%;
        font-size: 1rem;
    }

    button {
        background-color: #007BFF;
        color: white;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
        font-size: 1rem;
        padding: 10px;
    }

    button:hover {
        background-color: #0056b3;
    }

    .stars {
        display: flex;
        justify-content: center;
        flex-direction: row;
        margin-bottom: 12px;
    }

    .star {
        font-size: 1.8rem;
        color: #ccc;
        cursor: pointer;
        transition: color 0.3s ease;
    }

    .star.filled {
        color: #FFD700;
    }

    .star:hover,
    .star:hover ~ .star {
        color: #FFD700;
    }
</style>
