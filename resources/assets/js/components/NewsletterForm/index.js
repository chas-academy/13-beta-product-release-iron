import React from 'react';
import '../styles/styles.css';
import validator from 'validator'; 
import  { Form, Input, Icon, Button } from 'antd'; 

const NewsletterForm  = ({email, handleOnChangeEmail, handleSendEmail}) => {
  return  (
    <div className="container newsletter-container">
    <div className="content">
      <p className="footer-news">Sign up for our newsletter</p> 
      <Form layout='inline' className='newsletter-form' action='javascript:void(0);' method='POST'>
        <div className="field has-addons">

				  <div id="control-input" className="control">
              <Form.Item id="control-input" className="control">
                <Input id="input-field" className="input" onChange={({target}) => handleOnChangeEmail(target.value)}
                  prefix={<Icon type='red-envelope'/>} placeholder ='Enter your email' value={email} />
              </Form.Item>
            </div>

            <div className="control">
            <Form.Item>
            <Button id="news-button" onClick={() => handleSendEmail(email)} 
            htmlType='submit' type='primary' disabled={!validator.isEmail(email)}>
              Send</Button>
            </Form.Item>
            </div>

        </div>
      </Form>
    </div>
    </div>
  );
}

export default NewsletterForm; 
