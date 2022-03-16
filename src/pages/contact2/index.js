import React from "react"
import Layout from "../../components/Layout"

import '../../components/contact2Page.css'


function ContactPage() {
  return (
    <Layout>

{/*      <form className='contact_form' name="Contact Form" method="POST" data-netlify="true" action="/pages/success"> */}
      <form className='contact_form' name="Contact Form" method="POST" action="/pages/success"></form>
        <input type="hidden" name="form-name" value="Contact Form" />
        <h1 className='contactHeader'>CONTACT US</h1>
        <label>お名前：</label><input type="text" name="name" className="contact__field" placeholder="お名前を入力して下さい"></input>
        <label>メールアドレス：</label><input name="email" type="email" className="contact__field" placeholder="メールアドレスを入力して下さい"></input>
        <label>件名：</label><input name='subject' type="text" className="contact__field" placeholder="件名を入力して下さい"></input>
        <label>お問い合わせ内容：</label><textarea name='message' className="contact__field" placeholder="お問い合わせ内容を入力して下さい"></textarea>
        <div data-netlify-recaptcha="true"></div>
        <button type='submit'>送信</button>
      </form>
    </Layout>
  );
}

export default ContactPage;