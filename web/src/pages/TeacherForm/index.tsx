import React from 'react';

import PageHeader from '../../Components/PageHeader';
import Input from '../../Components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Textarea from '../../Components/Textarea';
import Select from '../../Components/Select';

function TeacherForm() {
    return (
        <div className="container" id="page-teacher-form">
            <PageHeader title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biografia" />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciência', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Música', label: 'Música' },
                        ]}
                    />
                    <Input name="cost" label="Custo da sua hora por aula" />

                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                    <button type="button">
                            + Novo horário
                    </button>
                    </legend>

                    <div className="schedule-item">
                        <Select
                            name="subject"
                            label="Matéria"
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciência', label: 'Ciências' },
                                { value: 'Educação Física', label: 'Educação Física' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Química', label: 'Química' },
                                { value: 'Música', label: 'Música' },
                            ]}
                        />
                        <Input name="from" label="Das" type="time"/>
                        <Input name="to" label="Até" type="time" />
                    </div>

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>

            </main>
        </div>

    );
}

export default TeacherForm;