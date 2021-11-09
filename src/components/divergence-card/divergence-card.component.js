import React, { Component } from "react";
import styles from './divergence-card.module.scss';
import ActionButton from '../buttons/action-button.component'
import { Button } from '@acesso-io/genoma-components-react';
import classNames from 'classnames';

class DivergenceCard extends Component {

    render() {
        const info = [
            {
                label: 'CPF',
                value: 'XXX.XXX.00-XX'
            },
            {
                label: 'Nome',
                value: 'Nome e sobrenome'
            },
            {
                label: 'Origem',
                value: 'Cliente origem'
            },
            {
                label: 'Data',
                value: 'XX/XX/XXXX - XX:XX'
            },
        ]

        const divergenceClass = this.props.type.class

        return(
            <div className={styles['card-container']}>
                <div className={styles['divergence-image']}>
                    <span 
                        className={classNames(
                            styles[`${divergenceClass}`]
                          )}
                    >
                    {this.props.type.label}
                    </span>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9d255e12-9bdc-486f-afb3-6f051dcde02f/d50416b-4eb1cb7e-1f32-4a93-b852-0b59bc85e47d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlkMjU1ZTEyLTliZGMtNDg2Zi1hZmIzLTZmMDUxZGNkZTAyZlwvZDUwNDE2Yi00ZWIxY2I3ZS0xZjMyLTRhOTMtYjg1Mi0wYjU5YmM4NWU0N2QuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MmO3kKJ-TzTC0TujsYr2bduqszv732Ud6cv9o33nF5A" alt="divergence"></img>
                </div>
                <div className={styles['buttons-area']}>
                    <ActionButton type={'positive'} label={"+"}></ActionButton>
                    <ActionButton type={'discart'} label={"-"}></ActionButton>
                    <ActionButton type={'suspect'} label={"S"}></ActionButton>
                    <ActionButton type={'restrict'} label={"R"}></ActionButton>
                </div>
                <ul className={styles['info-area']}>
                {info.map((item, index) => {
                    return <li key={index}>{item.label}: {item.value}</li>
                })}
                </ul>
                <div className={styles['save-button']}>
                    <Button color="primary" size="small" variant="link">Salvar</Button>
                </div>
            </div>
        );
    }

}

export default DivergenceCard