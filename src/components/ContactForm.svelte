<script>
    let name = '';
    let email = '';
    let message = '';
    let statusMessage = '';

    const handleSubmit = async () => {
        const formData = { name, email, message };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                statusMessage = 'Email sent successfully!';
            } else {
                statusMessage = 'Failed to send email. Please try again later.';
            }
        } catch (error) {
            console.error('Error sending email:', error);
            statusMessage = 'An error occurred while sending the email. Please try again later.';
        }
    };
</script>

<div class="contact-form">
    <h2>Contact Me</h2>
    <form on:submit|preventDefault={handleSubmit}>
        <label for="name">Name:</label>
        <input type="text" id="name" bind:value={name} required>

        <label for="email">Email:</label>
        <input type="email" id="email" bind:value={email} required>

        <label for="message">Message:</label>
        <textarea id="message" bind:value={message} rows="4" required></textarea>

        <button type="submit">Submit</button>
    </form>

    {#if statusMessage}
        <p>{statusMessage}</p>
    {/if}
</div>

<style>

</style>
