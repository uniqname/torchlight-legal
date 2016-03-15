import { Component } from 'react';
import { Link } from 'react-router';
import Field from './field';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            action: 'https://torchlight.legal.io/users/',
            method: 'post',
            email: '',
            password: '',
            name: '',
            organization: '',
            betaCode: '',
            participantType: '',
            assistanceType: '',
            registerText: 'Register',
            registerAction: () => {},
            logInText: 'Login',
            logInAction: () => {}
        };
    }

    handleParticipantTypeChange(evt) {
        this.setState({ participantType: evt.target.value })
    }

    handleAssistanceTypeChange(evt) {
        this.setState({ assistanceType: evt.target.value })
    }

    render() {
        const {
            onRegister=()=>{},
            email,
            emailPlaceholder='e.g. you@awesomelegalfirm.com',
            password,
            passwordPlaceholder='',
            name,
            namePlaceholder='e.g. Jennifer Gonzalez',
            organization,
            organizationPlaceholder='e.g. Benficient Legal Services',
            betaCode='',
            betaCodePlaceholder='XXX-XXX',
            participantType,
            assistanceType
        } = this.state;
        return <section id="register">
            <form class="registration"
                  onSubmit={ this.state.onRegister }>

                <Field label="Email"
                       type="email"
                       name="email"
                       value={email}
                       placeholder={emailPlaceholder}/>

                <Field label="Password"
                       type="password"
                       name="password"
                       value={password}
                       placeholder={passwordPlaceholder}/>

                <Field label="Name"
                       type="text"
                       name="name"
                       value={name}
                       placeholder={namePlaceholder}/>

                <Field label="Organizaiton"
                       type="text"
                       name="organization"
                       value={organization}
                       placeholder={organizationPlaceholder}/>

                <Field label="Beta Code"
                       type="text"
                       name="betacode"
                       value={betaCode}
                       placeholder={betaCodePlaceholder}/>

                <Field label="Participant Type"
                       type="radio"
                       name="type"
                       value={ this.state.participantType }
                       onChange={ this.handleParticipantTypeChange.bind(this) }
                       options={ [{
                           value: "lead",
                           label: "Lead Attorney"
                       }, {
                           value: "volunteer",
                           label: "Volunteer"
                       }] } />

                <Field label="How can you help?"
                    type={ (this.state.participantType === 'volunteer') ? 'checkbox' : 'hidden'}
                    name="service-type"
                    value={assistanceType}
                    onChange={ this.handleAssistanceTypeChange.bind(this) }
                    options={ [{
                        value: "language",
                        label: "Language"
                    }, {
                        value: "country_research",
                        label: "Country Research"
                    }, {
                        value: "legal_research",
                        label: "Legal Research"
                    }] } />

                <Link to="/profile" className="button">Register</Link>
            </form>
            <Link to="#login" className="button">Back to login</Link>

        </section>
    }
};
