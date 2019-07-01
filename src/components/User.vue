<template>
    <div class="blue lighten-3 pa-5">
        <h1>User Component</h1>
        <p>name : {{ name }}</p>
        <v-btn class="green lighten-3 pa-2 mb-3" @click="changeName()">Change Your Name</v-btn>
        <hr>
        <v-layout row wrap>
            <v-flex xs12 sm6>
<!--                <UserDetail v-bind:nameOfChild="name"></UserDetail>-->
                <UserDetail :nameOfChild="{name : 'LiBRe', familyName: 'ShiNn'}"></UserDetail>
<!--                nameOfChild라는 배열이름으로 name, familyName자료를 넘겨줌-->
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
    // 1. 홈 컴포넌트를 가져는 왓는데 이것을 사용하기 위해서는 이것이 컴포넌트라고 선언을 해주어야한다.
    export default {
        components: {
            UserDetail, //2.홈 컴포넌트를 컴포넌트라고 선언
            UserEdit
        },
        data() {
            return {
                name: 'LiBReShiNn' //세미콜론 찍으면 오류남. 데이터 전송도 중에 끊어버리는 것과 같은 것
            }
        },
        methods: {
            changeName() {
                this.name = "ShiNni"
            }
        }
    }
</script>
