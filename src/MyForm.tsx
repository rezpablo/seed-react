import * as React from 'react';

import { Form, Field } from 'react-final-form'
import Styles from './Styles';

interface MyFormProps {}
interface MyFormState {}

class MyForm extends React.Component<MyFormProps, MyFormState> {

    sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    onSubmit = async values => {
        await this.sleep(300);
        window.alert(JSON.stringify(values));
    };

    render() {

        return (
            <Styles>
                <h1>🏁 React Final Form - Simple Example</h1>
                <a href="https://github.com/erikras/react-final-form#-react-final-form">
                    Read Docs
                </a>
                <Form
                    onSubmit={this.onSubmit}
                    initialValues={{employed: true, stooge: 'larry'}}
                    render={({handleSubmit, reset, submitting, pristine, values}) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>First Name</label>
                                <Field
                                    name="firstName"
                                    component="input"
                                    type="text"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <Field
                                    name="lastName"
                                    component="input"
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <Field
                                    name="email"
                                    component="input"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label>Favorite Color</label>
                                <Field name="favoriteColor" component="select">
                                    <option/>
                                    <option value="#ff0000">❤️ Red</option>
                                    <option value="#00ff00">💚 Green</option>
                                    <option value="#0000ff">💙 Blue</option>
                                </Field>
                            </div>
                            <div>
                                <label>Employed?</label>
                                <Field name="employed" component="input" type="checkbox"/>
                            </div>
                            <div>
                                <label>Toppings</label>
                                <Field name="toppings" component="select" multiple>
                                    <option value="ham">🐷 Ham</option>
                                    <option value="mushrooms">🍄 Mushrooms</option>
                                    <option value="cheese">🧀 Cheese</option>
                                    <option value="chicken">🐓 Chicken</option>
                                    <option value="pineapple">🍍 Pinapple</option>
                                </Field>
                            </div>
                            <div>
                                <label>Best Stooge?</label>
                                <div>
                                    <label>
                                        <Field
                                            name="stooge"
                                            component="input"
                                            type="radio"
                                            value="larry"
                                        />{' '}
                                        Larry
                                    </label>
                                    <label>
                                        <Field
                                            name="stooge"
                                            component="input"
                                            type="radio"
                                            value="moe"
                                        />{' '}
                                        Moe
                                    </label>
                                    <label>
                                        <Field
                                            name="stooge"
                                            component="input"
                                            type="radio"
                                            value="curly"
                                        />{' '}
                                        Curly
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label>Sauces</label>
                                <div>
                                    <label>
                                        <Field
                                            name="sauces"
                                            component="input"
                                            type="checkbox"
                                            value="ketchup"
                                        />{' '}
                                        Ketchup
                                    </label>
                                    <label>
                                        <Field
                                            name="sauces"
                                            component="input"
                                            type="checkbox"
                                            value="mustard"
                                        />{' '}
                                        Mustard
                                    </label>
                                    <label>
                                        <Field
                                            name="sauces"
                                            component="input"
                                            type="checkbox"
                                            value="salsa"
                                        />{' '}
                                        Salsa
                                    </label>
                                    <label>
                                        <Field
                                            name="sauces"
                                            component="input"
                                            type="checkbox"
                                            value="guacamole"
                                        />{' '}
                                        Guacamole 🥑
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label>Notes</label>
                                <Field name="notes" component="textarea" placeholder="Notes"/>
                            </div>
                            <div className="buttons">
                                <button type="submit" disabled={submitting || pristine}>
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={reset}
                                    disabled={submitting || pristine}>
                                    Reset
                                </button>
                            </div>
                            <pre>{JSON.stringify(values)}</pre>
                        </form>
                    )}
                />
            </Styles>
        );
    }
}

export default MyForm;