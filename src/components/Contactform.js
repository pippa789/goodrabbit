import React, {useRef} from 'react';
import emailjs from 'emailjs-com';

function Contactform() {
    const form = useRef();
    const sendEmail =(e) =>{
        e.preventDefault();
        emailjs.sendForm('gmail', 'service_cjuygoc', 'template_61d9c6b', form.current, 'Is7NNt7-5tUhIM4IO'
        ).then((result)=>{
            console.log(result.text)
        },(error)=>{console.log(error.text)
        })
    }
  return (
    <div className='container border'
    style={{
        marginTop:"50px",
        width: '50%',
        backgroundColor: '#4f4f52',
        //use these if using a background image
        // backgroundPosition:'center',
        // backgroundSize: 'cover'
    }}>
        <h1 style={{margin:'50px 170px 30px 170px'}}>Contact Form</h1>
        <form className='row' style={{margin:'25px 85px 75px 100px'}}
        onSubmit={sendEmail} ref={form}>
            <label>name</label>
            <input type='text' name='name' className='form-control' /> 

            <label>Email</label>
            <input type='email' name='user_email' className='form-control'/>

            <labe>Message</labe>
            <textarea name='message' rows='6' style={{margin: '30px'}} />
            <input type='submit' value='Send' className='form-control btn btn-primary'/>
        </form>
    </div>
  )
}

export default Contactform