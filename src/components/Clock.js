import React from 'react';
// import ButtonDel from './ButtonDel';

function Clock(props) {
    const {items, onRemove} = props;

    return (
        <div className="watches">
            {items.map(item =>
                <div className="clock-container" key={item.id}>
                    <h4>{item.title}</h4>
                    {/* <ButtonDel /> */}
                    <button className="delete" onClick={() => onRemove(item.id)}>X</button>
                    <article className="clock">
                        <div className="hours-container">
                            <div className="hours"></div>
                        </div>
                        <div className="minutes-container">
                            <div className="minutes"></div>
                        </div>
                        <div className="seconds-container">
                            <div className="seconds"></div>
                        </div>
                    </article>
                </div>
            )}
        </div>
    )
}

export default Clock;
