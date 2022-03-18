<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Agenda de contatos
            </div>
            <div class="card-body">
                <router-link :to="{name:'Add'}" class="btn btn-primary">Adicionar</router-link>

                <table class="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Celular</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="schedule in this.schedules" :key="schedule.id">
                            <td> {{schedule.name}} </td>
                            <td> {{schedule.email}} </td>
                            <td> {{schedule.cellPhone}} </td>
                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                    <router-link :to="{name:'Edit'}" v-on:click="editSchedule(schedule)" class="btn btn-primary">Editar</router-link>
                                    <button type="button" v-on:click="deleteSchedule(schedule.id)" class="btn btn-danger">Excluir</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ListSchedules',
    data() {
        return {
            schedules: []
        }
    },   
    methods: {
        refreshSchdules: function() {
            axios.get('https://localhost:7237/Schedules/GetAll')
                .then(response => {
                    this.schedules = response.data;
                    console.log(response);
                })
                .catch(error => console.log(error))
        },
        deleteSchedule(id) {
            axios.delete(`https://localhost:7237/Schedules/Delete/${id}`)
                .then(response => {
                    console.log(response)
                    alert("Exclusão realizada com secesso.")
                    this.refreshSchdules()
                })
                .catch(error => console.log(error))
        },
        editSchedule(schedule) {
            const id = schedule.id;
            const name = schedule.name;
            const email = schedule.email;
            const cellphone = schedule.cellPhone;
            this.$router.push({ name: 'Edit', params: { id, name, email, cellphone }});
        }
    },
    mounted() {
        this.refreshSchdules();
    }
}
</script>
