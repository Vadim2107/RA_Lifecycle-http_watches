import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
const times = <FontAwesomeIcon icon={faTimesCircle} />;
const editor = <FontAwesomeIcon icon={faEdit} />;

function Table(props) {
    const {items, onRemove, onEdit} = props;

    const convertDate = (str) => {
        const year = str.slice(6);
        const month = str.slice(2, 6);
        const day = str.slice(0, 2);        
        str = year + month + day;
        return str;
    }

    items.sort((a, b) => {
        const DateA = new Date(convertDate(a.date)).getTime();
        const DateB = new Date(convertDate(b.date)).getTime();
        return (DateB - DateA);
    })

    return (
        <div>
            <table className="table">
                <thead className="table-head">
                    <tr>
                        <th>Дата (ДД.ММ.ГГГГ)</th>
                        <th>Пройдено км</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody className="table-steps">
                    {items.map(item => 
                        <tr className="item" key={item.id}>
                            <td>{item.date}</td>
                            <td>{item.distance}</td>
                            <td>
                                <button className="item-action" onClick={() => onEdit(item.id)}>{editor}</button>
                                <button className="item-action" onClick={() => onRemove(item.id)}>{times}</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
