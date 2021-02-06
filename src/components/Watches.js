import React, { useState } from 'react';
import Form from './Form';
import Clock from './Clock';
import { nanoid } from 'nanoid';

function Watches() {

    const [form, setForm] = useState({
        title: "",
        timeZone: "",
    });

    const [items, setItems] = useState([])

    const onSubmit = evt => {
        evt.preventDefault();
        
        // const itemDate = items.find(item => item.date === form.date);
        // if (itemDate) {            
        //         itemDate.distance = Number(itemDate.distance) + Number(form.distance);
        // } else {
        //     setItems(prevItems => ([...prevItems, {
        //         date: form.date,
        //         distance: form.distance,
        //         id: nanoid()
        //     }]));
        // }

        setItems(prevItems => ([...prevItems, {
                    title: form.title,
                    // distance: form.distance,
                    id: nanoid()
        }]));

        setForm(prevForm => ({...prevForm, title: "", timeZone: ""}));
    }

    const onChange = ({target}) => {
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setForm(prevForm => ({...prevForm, [name]: value}));
    }

    // const onEdit = (e) => {
    //     alert('Задача со звездочкой!!!');
    // }

    const onRemove = (id) => {
        setItems(prevItems => prevItems.filter(o => o.id !== id));
    }

    return (
        <React.Fragment>
            <Form
                form = {form}
                onSubmit = {onSubmit}
                onChange = {onChange} />
            <Clock 
                items = {items}
                onRemove = {onRemove}/>

            {/* <Table
                items = {items}
                onRemove = {onRemove}
                onEdit = {onEdit} /> */}
        </React.Fragment>
    );
}

export default Watches;
