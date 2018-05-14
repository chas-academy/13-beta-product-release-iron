import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.css';
import SodaLogo from '../images/SodaFactory.png';
import FbLogo from '../images/fb.svg';
import InstaLogo from '../images/insta.svg';
import './styles.css';
import NewsletterForm from './NewsletterForm';

class Footer extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: ''
		}
	}
	handleSendEmail (email) {
		console.log(email)
	}
	handleOnChangeEmail (email)	{
		this.setState ({
			email: email
		})

	}
	render() {
		return (
			<div>
				<footer className="footer" id="contact">
					
					<div className="container footer-container">
						<div className="content">
							<p id="footer-title" className="footer-title">Contact Us</p>
							<p className="footer-p">info@mega-mate.com</p>
						</div>
						<div className="content">
							<a className="logo-link" href="https://www.facebook.com/megamate.sodafactory/" target="_blank">
								<p className="footer-logo">Facebook</p>
							</a>
							<a className="logo-link" href="https://www.instagram.com/mega_mate/" target="_blank">
							<p className="footer-logo">Instagram</p>
							</a>
							<a className="logo-link" href="https://www.sodafactory.se" target="_blank">
							<p className="footer-logo">SodaFactory</p>
							</a>
						</div>
					</div>
					<div className="container newsletter-container">
						<div className="content">
							<p className="footer-news">Sign up for our newsletter</p>               
								<div className="field has-addons">
									<div className="control" id="control-input">
										<input
											id="input-field"
											className="input"
											type="text"
											placeholder="Enter your email"/>
									</div>
									<div className="control">
										<a id="news-button" className="button is-info">Submit</a>
									</div> 
								</div>
							</div>
						</div> 
						<NewsletterForm email={this.state.email} handleOnChangeEmail={this.handleOnChangeEmail} handleSendEmail={this.handleSendEmail}/>
				</footer>
			</div>
			
		);
	}
}

export default Footer;
