<template>
    <div class="blue lighten-3 pa-5">
        <h1>User Component</h1>
        <p>name : {{ name }}</p>
        <v-btn class="green lighten-3 pa-2 mb-3" @click="changeName()">Change Your Name</v-btn>
        <hr>
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <UserDetail :nameOfChild="name"></UserDetail>
            </v-flex>
            <v-flex xs12 sm6>
                <UserEdit></UserEdit>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    export default {
        components: {
            UserDetail,
            UserEdit
        },
        data() {
            return {
                name: 'LiBReShiNn'
            }
        },
        methods: {
            changeName() {
                this.name = 'ShiNni'
            }
        }
    }
</script>
