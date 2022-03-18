<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Editar contato
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="EditSchedule"> 
                    <div class="form-group">
                        <label for="name">Nome</label>
                        <input type="text" class="form-control" name="name" v-model="name" id="name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" name="email" v-model="email" id="email">
                    </div>
                    <div class="form-group">
                        <label for="cellphone">Celular</label>
                        <input type="text" class="form-control" name="cellphone" v-model="cellphone" id="cellphone">
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
    name: 'EditSchedules',
    data() {
        return {
            schedule: {},
            id: '', 
            name: '',
            email: '',
            cellphone: '',
        }
    },
    
    methods: {
        EditSchedule: function() {
            const values = {
                id: this.id,
                name: this.name,
                email: this.email,
                cellphone: this.cellphone,
            };  

            axios.put(`https://localhost:7237/Schedules/Update/${this.id}`, values)
            .then(response => {
                this.schedules = response.data;
                    //console.log(this.schedules);
                    console.log(response);
                    alert("Registro atualizado com sucesso.")
                })
                .catch(error => console.log(error))
        }
    },
    mounted() { // essa função é carregada quando a tela é "montada"
        this.id = this.$route.params.id
        this.name = this.$route.params.name
        this.email = this.$route.params.email
        this.cellphone = this.$route.params.cellphone
    }
}
</script>