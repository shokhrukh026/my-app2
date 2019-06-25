<template>
    <div>
        <v-toolbar app dark class="primary">
            <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
            <router-link to="/" tag="span" style="cursor:pointer">
                <v-toolbar-title v-text="'Ich Lerne Deutsch'"></v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat v-for="(item,i) in menuItems" :key="`menuitems${i}`" :to="item.route">
                    <v-icon left v-html="item.icon"></v-icon>
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>



<script>
export default {
    data(){
        return {
            drawer: false,
        }
    },
    computed:{
        menuItems(){
            return[
                {
                    icon: 'visibility',
                    title:'Читать',
                    route: '/books'
                },
                {
                    icon: 'extension',
                    title: 'Учить Слова',
                    route: '/words'
                },
                {
                    icon: 'account_circle',
                    title: 'Мой кабинет',
                    route: '/profile'
                },
                {
                    icon: 'exit_to_app',
                    title: 'Выйти',
                    route: '/logout'
                },
                {
                    icon: 'input',
                    title: 'Войти',
                    route: '/signin'
                },
                {
                    icon: 'lock_open',
                    title: 'Зарегестрироваться',
                    route: '/signup'
                },
            ]
        }
    }

}
</script>

