import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <main>
                <h1>Contact Us</h1>

                <form action='https://formspree.io/f/mgebablb' method='POST'>
                    <div>
                        <label>Name</label>
                        <input type="text" name='name' required placeholder='Abc' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name='email' required placeholder='Abc@gmail.com' />
                    </div>
                    <div>
                        <label>Message</label>
                        <input type="text" name='message' required placeholder='Your Query Please' />
                    </div>
                    <button type='submit'>Send</button>
                </form>
            </main>

        </div>
    )
}

export default Contact