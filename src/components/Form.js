import React from 'react';

function Form(props) {
    const {form, onSubmit, onChange} = props;
    
    return (
        <form onSubmit={onSubmit}>        
            <div className='form'>
                <label htmlFor="title">Название</label>
                <input id="title" name="title" value={form.title} onChange={onChange} />
            </div>
            <div className='form'>
                <label htmlFor="timeZone">Временная зона</label>
                <input id="timeZone" name="timeZone" value={form.timeZone} onChange={onChange} />
            </div>
            <button type="submit" className="submit" onClick={onSubmit}>Добавить</button>
        </form>
    );
}

export default Form;
