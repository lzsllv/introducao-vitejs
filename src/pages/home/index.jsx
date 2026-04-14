import { Link } from "react-router";

import styles from './index.module.css';

function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.containerLista}>
        <h1>Exemplos</h1>
        <Link to="/exemplo/1">Exemplo 1 - Componente básico</Link>
        <Link to="/exemplo/2">Exemplo 2 - Estilização com module</Link>
        <Link to="/exemplo/3">Exemplo 3 - State</Link>
      </div>

      <div className={styles.containerLista}>
        <h1>Atividades</h1>

      </div>


    </div>

  )
}

export default Home;