import React, { useState, FormEvent } from 'react';

import './styles.css';
import PageHeader from '../../Components/PageHeader';
import TeacherItem ,{Teacher}from '../../Components/TeacherItem';
import Input from '../../Components/Input';
import Select from '../../Components/Select';
import api from '../../services/api';


function TeacherList() {

    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data);
    }

    return (
        <div className="container" id="page-teacher-list">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>

                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
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
                        value={week_day}
                        onChange={e => setWeek_day(e.target.value)}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feria' },
                            { value: '3 ', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={e => {
                            setTime(e.target.value)

                        }}

                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>

            </PageHeader>

            <main>
                {
                    teachers.map((teacher: Teacher) => {
                        return <TeacherItem key={teacher.id} teacher={teacher}/>;
                    })
                }
                
            </main>

        </div>
    )
}

export default TeacherList;