import React from 'react';

import './styles.css';
import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';
import Input from '../../Components/Input';
import Select from '../../Components/Select';



function TeacherList() {
    return (
        <div className="container" id="page-teacher-list">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">

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
                   <Select
                        name="week-day"
                        label="Dia da semana"
                        options={[
                            {value:'0', label: 'Domingo'},
                            {value:'1', label: 'Segunda-feira'},
                            {value:'2', label: 'Terça-feria'},
                            {value:'3 ', label: 'Quarta-feira'},
                            {value:'4', label: 'Quinta-feira'},
                            {value:'5', label: 'Sexta-feira'},
                            {value:'6', label: 'Sábado'},
                        ]}
                    />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>

        </div>
    )
}

export default TeacherList;