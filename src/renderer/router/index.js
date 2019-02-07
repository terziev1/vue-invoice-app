import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Create Invoice',
      component: require('@/components/CreateInvoice').default
    },
    {
      path: '/all',
      name: 'All Invoices',
      component: require('@/components/Invoices.vue').default
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: require('@/components/Contacts.vue').default
    },
    {
      path: '/settings',
      name: 'Settings',
      component: require('@/components/Settings').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
