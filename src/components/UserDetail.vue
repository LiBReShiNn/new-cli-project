<template>
    <div class="red lighten-3 pa-3">
        <h3>자세한 회원 정보를 확인합니다.</h3>
        <!--        <p>이름 : {{ name }}</p>-->
        <p>{{ nameOfChild.name }}</p>
        <p>{{ nameOfChild.familyName }}</p>
        <p>{{ sayHello }}</p>
    </div>
</template>

<script>
    export default {
        // 부모컴포넌트에서 선언한 변수명으로 배열받음
        props: {
            // 값은 이미 부모에게서 받았으므로 값을 기록할 수 없고 데이터 타입만 기록이 가능하다
            // nameOfChild:Object
            // nameOfChild:String
            // nameOfChild를 객체로 선언 가능
            nameOfChild: {
                // type: String, //(자료형 에러)
                type: Object,
                required: true,//(전달 받았는지 확인가능, default와 함께 쓰면 충돌)
                default: 'LEGO'//(값을 전달 받지 못했을 경우 default값, 값을 전달 받았을 경우 해당 값)

            },
            computed: {
                sayHello() {
                    // return this.nameOfChild.name + ' 안녕하세요'; (X)
                    // 선언시 객체가 존재하지 않기 때문?
                    return this.nameOfChild.name + ' 안녕하세요';
                }
            }
        }
    }
</script>
