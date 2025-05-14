<script>
    let sessions = [];

    // Load sessions from localStorage
    function loadSessions() {
        if (typeof window !== 'undefined') {
            sessions = JSON.parse(localStorage.getItem('sessions')) || [];
        }
    }

    // Load sessions when the component is initialized
    loadSessions();
</script>

<main>
    <div class="sessions-container">
        <h1>Saved Sessions</h1>
        {#if sessions.length > 0}
            {#each sessions as session}
                <div class="session">
                    <p><strong>Date:</strong> {session.date}</p>
                    <p><strong>Time:</strong> {session.time}</p>

                    <div class="rating-row">
                        <p><strong>Sleep:</strong></p>
                        <div class="stars">
                            {#each Array(5).fill(0).map((_, i) => i) as i}
                                <span class="star {i < session.sleep ? 'filled' : ''}">★</span>
                            {/each}
                        </div>
                    </div>

                    <div class="rating-row">
                        <p><strong>Nutrition:</strong></p>
                        <div class="stars">
                            {#each Array(5).fill(0).map((_, i) => i) as i}
                                <span class="star {i < session.nutrition ? 'filled' : ''}">★</span>
                            {/each}
                        </div>
                    </div>

                    <div class="rating-row">
                        <p><strong>Feel:</strong></p>
                        <div class="stars">
                            {#each Array(5).fill(0).map((_, i) => i) as i}
                                <span class="star {i < session.feel ? 'filled' : ''}">★</span>
                            {/each}
                        </div>
                    </div>

                    <p><strong>Notes:</strong> {session.notes}</p>
                    {#if session.image}
                        <img src={session.image} alt="Uploaded Image" class="session-image" />
                    {/if}
                </div>
            {/each}
        {:else}
            <p>No sessions saved yet.</p>
        {/if}
    </div>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        background-color: #f9f9f9;
        min-height: 100vh;
    }

    .sessions-container {
        max-width: 600px;
        width: 100%;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .session {
        margin-bottom: 20px;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }

    .session:last-child {
        border-bottom: none;
    }

    .session-image {
        max-width: 100%;
        height: auto;
        margin-top: 10px;
    }

    h1 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 1.8rem;
        color: #333;
    }

    p {
        margin: 5px 0;
        font-size: 1rem;
        color: #555;
    }

    .rating-row {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
    }

    .rating-row p {
        margin: 0;
        margin-right: 10px;
        font-size: 1rem;
        color: #555;
    }

    .stars {
        display: flex;
    }

    .star {
        font-size: 1.5rem; /* Reduced font size for smaller stars */
        color: #ccc;
        transition: color 0.3s ease;
    }

    .star.filled {
        color: #FFD700;
    }
</style>