<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Adicionar contatos
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="AddSchedule"> 
                    <div class="form-group">
                        <label for="name">Nome</label>
                        <input type="text" class="form-control" name="name" v-model="schedule.name" id="name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" name="email" v-model="schedule.email" id="email">
                    </div>
                    <div class="form-group">
                        <label for="cellphone">Celular</label>
                        <input type="text" class="form-control" name="cellphone" v-model="schedule.cellPhone" id="cellphone">
                    </div>
                    <br>
                    <div class="btn-group" role="group" aria-label="">
                        <router-link :to="{name:'List'}" class="btn btn-secondary">Cancelar</router-link>                    
                        <button type="submit" class="btn btn-success">Salvar</button>                        
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AddSchedules',
    data() {
        return {
            schedule: {},
        }
    },
    methods: {
        AddSchedule: function() {
            var values = {
                name: this.schedule.name,
                email: this.schedule.email,
                cellphone: this.schedule.cellPhone,
            };
            axios.post('https://localhost:7237/Schedules/Insert', values)
            .then(response => {
                this.schedules = response.data;
                    console.log(this.schedules);
                    alert("Registro inserido com sucesso.");

                    this.schedule.name = '',
                    this.schedule.email = '',
                    this.schedule.cellPhone = ''
                })
                .catch(error => console.log(error))
        }
    },    
}
</script>