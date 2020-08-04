import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/39519684?s=460&u=be93e91d68e8f51b22337010d273e6597a644151&v=4" alt="Ingrid Barbosa" />
                <div >
                    <strong>Ingrid Barbosa</strong>
                    <span>Música</span>
                </div>
            </header>

            <p>
                Apaixonada por música, e para mudar a vida das pessoas através de experiências práticas.
                    <br /><br />
                    Mais de 200.000 pessoas assistiram meus concertos.
                </p>
            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;