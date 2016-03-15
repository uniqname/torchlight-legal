import { Component } from 'react';
import { Link } from 'react-router';
import Field from './field';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            action: 'https://torchlight.legal.io/login',
            method: 'post',
            email: '',
            password: '',
            submitText: 'Submit',
            secondaryAction: () => {},
            secondaryActionText: 'Create An Account',
            legal: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        };
    }

    render() {
        const {
            onLogin=(e)=>{
                e.preventDefault();
            },
            email,
            emailPlaceholder="e.g. superstar@beneficientlegal.org",
            password,
            passwordPlaceholder="perhaps not password12345",
            submitText,
            secondaryAction,
            secondaryActionText,
            legal
        } = this.state;

        return (
            <section id="login">
                <form className="login"
                      onSubmit={onLogin}>

                    <Field label="Email"
                           type="email"
                           name="email"
                           value={email}
                           placeholder={emailPlaceholder} />

                    <Field label="Password"
                           type="password"
                           name="password"
                           value={password}
                           placeholder={passwordPlaceholder} />

                    <button type="submit">{submitText}</button>
                </form>

                <Link to="/register" className="button">
                    {secondaryActionText}
                </Link>

                <p>{ legal }</p>
            </section>
        );
    }
}
