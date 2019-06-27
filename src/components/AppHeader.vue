<template>
    <div>
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
            <v-list>
                <v-list-title v-for="(item, i) in menuItems" :key="`navdrawer${i}`">
                    <v-list-title-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-title-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-title>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dark class="primary">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"  class="hidden-md-and-up"></v-toolbar-side-icon>
            <router-link to="/" tag="span" style="cursor: pointer">
                <v-toolbar-title v-text="'Ich Lerne Deutsch'"></v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="(item, i) in menuItems" flat :key="`menuitems${i}`" :to="item.route">
                    <v-icon left v-html="item.icon"></v-icon>
                    {{item.title}}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>

export default {
  name: 'AppHeader',
  data(){
      return {
          drawer: false,
      }
  },
  components: {

  },
  computed:{
      menuItems(){
          return[
              {
                  icon: 'visibility',
                  title: 'Читать',
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
