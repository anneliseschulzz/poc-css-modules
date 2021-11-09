import React, { Component } from "react"
import styles from './App.module.scss';
import '@acesso-io/genoma-components-react/dist/styles.css';
import '@acesso-io/genoma-components-react/dist/reset.css';

import DivergenceCard from './components/divergence-card/divergence-card.component'

class App extends Component {
  render() {
    const current = {
      class: 'current',
      label: 'Pessoa análise' 
    }
    const restricted = {
      class: 'conflict', 
      label: 'Restrito'
    }

    return (
      <div className={styles['main-layout']}>
        <DivergenceCard type={current} ></DivergenceCard>
        <DivergenceCard type={restricted} ></DivergenceCard>
      </div>
    )
  }
}

export default App;
