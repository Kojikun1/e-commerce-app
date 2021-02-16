import React from 'react';

import './styles.css';

interface Props {
    name: string
    visible: boolean;
}

const AlertBox: React.FC<Props> = ({ name, visible }) => {
    const el = document.querySelector('.modal-container') as HTMLElement
     if(visible){
        el.classList.add('run-animate');
        setTimeout(() => {
            if(el.classList.contains('run-animate')){
                el.classList.remove('run-animate');
            }
          },1200);
     }
    return (
        <div className="modal-container">
            <p id="modal-text" >{name} foi adiconado ao Carrinho</p>
        </div>
    )
}

export default AlertBox;