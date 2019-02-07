<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    hide-overlay
    stateless
    width="240"
    dark
    class="mr-3"
  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile >
          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon v-if="!mini">chevron_left</v-icon>
              <v-icon v-else>chevron_right</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{$route.name}}
            </v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider class="mb-2"></v-divider>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
        class="mb-2"

      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>
            <router-link :to="item.route">
              {{ item.title }}
            </router-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Create new invoice', icon: 'create', route: '/' },
          { title: 'All invoices', icon: 'library_books', route: '/all' },
          { title: 'All contacts', icon: 'people', route: '/contacts' },
          { title: 'Settings', icon: 'settings', route: '/settings' }
        ],
        mini: true,
        right: null
      }
    }
  }
</script>
<style>
</style>

