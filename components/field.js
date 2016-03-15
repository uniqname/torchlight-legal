const field = ({
    label='',
    type='text',
    value='',
    onChange=() => {},
    placeholder='',
    name='',
    id
}) => type === 'select'
    ? <option value={value} key={id}>{label}</option>
    : <input type={ type }
               className="field__input"
               name={ name }
               value={ value }
               onChange={ onChange }
               placeholder={ placeholder } />;

export default ({
    label='',
    type='text',
    value='',
    placeholder='',
    name='',
    onChange=() => {},
    options=[]
}) => {
    switch (type) {
        case 'select':
        return (
            <label className="field">
                <span className="field__label">{ label }</span>
                <select name={name}>
                    { options.map( ({label, value}, id) => field({label, value, id })) }
                </select>
            </label>
        );

        case 'radio':
        case 'checkbox':
        return (
            <fieldset>
                <legend>{ label }</legend>
                { options.map( ({label, value}, id) => (
                    <label className="field"  key={id}>
                        <span className="field__label">{ label }</span>
                        { field({label, type, value, name, id, onChange}) }
                    </label>
                ))}
            </fieldset>
        );

        case 'hidden':
        return field({label, type, value, placeholder, name, onChange});

        default:
        return (
            <label className="field">
                <span className="field__label">{ label }</span>
                { field({label, type, value, placeholder, name, onChange}) }
            </label>
        );
    };
}
