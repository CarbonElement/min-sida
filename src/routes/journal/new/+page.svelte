<script>
    import { onMount } from 'svelte';
    onMount(() => {
        id = Math.random().toString(36).substr(2, 9);
        console.log('Generated ID:', id);
    });
    let time = '';
    let date = '';
    let sleep = 0;
    let nutrition = 0;
    let feel = 0;
    let notes = '';
    let id;
    console.log(id)

    let image = null; 

    function setSleep(value) {
        sleep = value;
    }

    function setNutrition(value) {
        nutrition = value;
    }

    function setFeel(value) {
        feel = value;
    }

    let hoverSleep = 0;

    function setHoverSleep(value) {
        hoverSleep = value;
    }

    function clearHoverSleep() {
        hoverSleep = 0;
    }
    
    let hoverNutrition = 0;

    function setHoverNutrition(value) {
        hoverNutrition = value;
    }

    function clearHoverNutrition() {
        hoverNutrition = 0;
    }

    let hoverFeel = 0;

    function setHoverFeel(value) {
        hoverFeel = value;
    }

    function clearHoverFeel() {
        hoverSleep = 0;
    }

    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                image = reader.result; // Save the Base64 string
                console.log('Image uploaded:', image);
            };
            reader.readAsDataURL(file); // Convert the image to a Base64 string
        }
    }

    function newSession() {
        if (!date || !time || sleep === 0 || nutrition === 0 || feel === 0) {
            alert('Please fill in all fields before submitting.');
            return;
        }
        const sessionData = {
            id,
            date,
            time,
            sleep,
            nutrition,
            feel,
            notes,
            image
        };
        console.log('New session data:', sessionData);
        const existingSessions = JSON.parse(localStorage.getItem('sessions')) || [];
        existingSessions.push(sessionData);
        localStorage.setItem('sessions', JSON.stringify(existingSessions));

        alert('Session saved successfully!');
        window.location.href = '/journal/sessions/' + id; 
    }

</script>
<main>
    <div class="container">
        <h1>New session</h1>
        
        <label for="date">Date:</label>
        <input type="date" id="date" bind:value={date} />

        <label for="time">Time:</label>
        <input type="time" id="time" bind:value={time} />

        <div class="rating-row">
            <label for="sleep">Sleep:</label>
            <div class="stars">
                {#each Array(5).fill(0).map((_, i) => i) as i}
                    <span 
                        class="star {i < (hoverSleep || sleep) ? 'filled' : ''}" 
                        on:click={() => setSleep(i + 1)}
                        on:mouseover={() => setHoverSleep(i + 1)}
                        on:mouseout={clearHoverSleep}>
                        ★
                    </span>
                {/each}
            </div>
        </div>

        <div class="rating-row">
            <label for="nutrition">Nutrition:</label>
            <div class="stars">
                {#each Array(5).fill(0).map((_, i) => i) as i}
                    <span 
                        class="star {i < (hoverNutrition || nutrition) ? 'filled' : ''}" 
                        on:click={() => setNutrition(i + 1)}
                        on:mouseover={() => setHoverNutrition(i + 1)}
                        on:mouseout={clearHoverNutrition}>
                        ★
                    </span>
                {/each}
            </div>
        </div>

        <div class="rating-row">
            <label for="feel">Feel:</label>
            <div class="stars">
                {#each Array(5).fill(0).map((_, i) => i) as i}
                    <span 
                        class="star {i < (hoverFeel || feel) ? 'filled' : ''}" 
                        on:click={() => setFeel(i + 1)}
                        on:mouseover={() => setHoverFeel(i + 1)}
                        on:mouseout={clearHoverFeel}>
                        ★
                    </span>
                {/each}
            </div>
        </div>
        
        <label for="image">Workout details:</label>
        <input type="file" id="image" accept="image/*" on:change={handleImageUpload} />

        <label for="notes">Notes:</label>
        <textarea id="notes" rows="2" placeholder="Write your notes here..." bind:value={notes}></textarea>

        <button type="button" on:click={() => newSession()}>Add</button>
        <button class="back-btn" on:click={() => window.location.href='/journal/'}>← Back to Home</button>
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

    .rating-row {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        gap: 10px;
    }

    .stars {
        display: flex;
        flex-direction: row;
        margin-bottom: 0; 
    }

    .star {
        font-size: 1.8rem;
        color: #ccc;
        cursor: pointer;
        transition: color 0.3s ease;
        position: relative;
    }

    .star.filled {
        color: #FFD700;
    }


    
    .star:hover {
        color: #FFD700;
    }
</style>
