<template>
    <div class="red lighten-3 pa-3">
        <h3>자세한 회원 정보를 확인합니다.</h3>
        <p>{{ nameOfChild }}</p>
        <p>{{ sayHello }}</p>
        <v-btn @click="switchName()">이름변경</v-btn>
    </div>
</template>

<script>
    export default {
        props: {
            nameOfChild: {
                type: String, //(자료형 에러)
                default: 'LEGO', //(값을 전달 받지 못했을 경우 default값
            },
        },
        computed: {
            sayHello() {
                return this.nameOfChild + ' 안녕하세요'
            }
        },
        methods: {
            switchName() {
                this.nameOfChild = '컴퓨터'
            }
        }
    }
</script>
