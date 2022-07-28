import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import React from 'react';

export const Sidebar = () => {

    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.banner} 
                src="https://images.unsplash.com/photo-1537963447914-dbc04b81de27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Capa do Usuário" />
            <div className={styles.profile}>
                <img className={styles.avatar}
                    src="https://avatars.githubusercontent.com/u/82673280?v=4" 
                    alt="Foto de perfil do Bruno" />
                <strong>Bruno Araujo</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine  size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )

}