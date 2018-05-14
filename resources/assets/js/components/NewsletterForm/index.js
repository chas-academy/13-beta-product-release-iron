import React from 'react';
import  { Form, Input, Icon, Button } from 'antd'; 
import validator from 'validator'; 

const NewsletterForm  = ({email, handleOnChangeEmail, handleSendEmail}) => {
  return  (
    <Form layout='inline' className='newsletter-form' action='javascript:void(0);' method='POST'>
    <Form.Item>
        <Input onChange={({target}) => handleOnChangeEmail(target.value)}
        prefix={<Icon type='red-envelope'/>} placeholder ='Your email here' value={email} disabled={!validator.isEmail(email)}/>
      </Form.Item>
      <Form.Item>
            <Button onClick={() => handleSendEmail(email)} 
            htmlType='submit' type='primary'>
              Send</Button>
      </Form.Item>

    </Form>
  );
}

export default NewsletterForm; 
