<script lang="ts">

</script>

<div>
    <h2>Contact Me</h2>
    <form class="form-contact"
        action='https://getform.io/f/0574f96f-fa5d-4942-b7e1-58d6cd3748f8' 
        method='POST'
        encType='multipart/form-data'
    >
        <div>
            <label for="name">Name</label>
            <input
                type='text'
                name='name'
                required={true}
            />
        </div>
        <div>
            <label for="phone">Phone Number</label>
            <input
                type='text'
                id='phone'
                name='phone'
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
                title="Phone number format: XXX-XXX-XXXX"
                required={true}
            />
        </div>
        <div>
            <label for="email">Email</label>
            <input
                type='email'
                name='email'
                placeholder="example@example.com"
                required={true}
            />
        </div>
        <div>
            <label for="subject">Subject</label>
            <input
                type='text'
                name='subject'
            />
        </div>
        <div class="message-box">
            <label for="message">Message</label>
            <textarea
                rows='5'
                name='message'
                required={true}
            ></textarea>
        </div>
        <div class="button-container">
            <button class='styled-btn'>
                Send Email
            </button>
        </div>
    </form>
</div>
<style>
      .form-contact {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .form-contact input,
    .form-contact textarea {
        width: 100%;
        padding: 10px;
        border: 2px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
    }

    .message-box {
        grid-column: span 2;
    }

    .button-container {
        grid-column: span 2;
        display: flex;
        justify-content: center;
    }

</style>