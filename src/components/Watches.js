import React, { useState } from 'react';
import Form from './Form';
import Clock from './Clock';
import { nanoid } from 'nanoid';
import moment from 'moment';


function Watches()  {

    const [form, setForm] = useState({
        title: "",
        timeZone: "",
    });

    const [items, setItems] = useState([])

    const onSubmit = evt => {
        evt.preventDefault();

        setItems(prevItems => ([...prevItems, {
            title: form.title,
            timeZone: form.timeZone,
            id: nanoid()
        }]));

        setForm(prevForm => ({...prevForm, title: "", timeZone: ""}));
    }

    const onChange = ({target}) => {
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setForm(prevForm => ({...prevForm, [name]: value}));
    }
    
    const onRemove = (id) => {
        setItems(prevItems => prevItems.filter(o => o.id !== id));
    }

    const getTimeZone = (tz) => {
        const utc = tz * 60
        const time = moment().utcOffset(utc).format();
        return time;
    }

    console.log(moment.utc().get('hour'));
    console.log(moment.utc().get('minute'));
    console.log(moment.utc().get('second'));
    console.log(moment.utc());

    return (
        <React.Fragment>
            <Form
                form = {form}
                onSubmit = {onSubmit}
                onChange = {onChange} />
            <Clock 
                items = {items}
                onRemove = {onRemove}
                getTimeZone = {getTimeZone} />
        </React.Fragment>
    );
}

export default Watches;
