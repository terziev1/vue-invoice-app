<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="inv in invoices" :key="inv.id">
        <v-card>
          <v-toolbar color="green" dark flat>
            <v-toolbar-title>Invoice</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
                <p>Name:{{inv.invoice.fullName}}</p>
                <p>Company: {{inv.invoice.company}}</p>
                <p>Country: {{inv.invoice.country}}</p>
                <p>Address: {{inv.invoice.address}}</p>
                <p>Product: {{inv.invoice.product}}</p>
                <p>Price: {{inv.invoice.price}}$ Quantity: {{inv.invoice.qty}}</p>
                <v-btn color="pink" fab dark small absolute bototm right>
                  <v-icon>add</v-icon>
                </v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data: () => ({

  }),
  computed: {
    ...mapState({
      invoices: state => state.Invoices.invoices
    })
  }
}
</script>

<style>
</style>
