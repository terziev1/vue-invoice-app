<template>
  <v-container grid-list-md>
    <v-card>
      <v-toolbar color="cyan" dark flat>
        <v-toolbar-title>Create invoice</v-toolbar-title>
      </v-toolbar>
    <v-form v-model="valid" ref=form>
      <v-card-text>
        <v-layout row wrap class="mb-2">
          <v-flex xs12 class="subheading">Recipent</v-flex>
          <v-flex xs12 md6>
            <v-text-field v-model="invoice.fullName" :rules="nameRules" label="Full name *" required></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field v-model="invoice.companyName" :rules="nameRules" label="Company name *" required></v-text-field>
          </v-flex>
          <!-- <v-flex xs12 md6>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail " required></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field v-model="phone" :rules="phoneRules" label="Phone"></v-text-field>
          </v-flex> -->
          <v-flex xs12 md6>
            <v-text-field v-model="invoice.country" :rules="countryRules" label="Country *" required></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field v-model="invoice.address" :rules="addressRules" label="Adress *" required=""></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="mb-2">
          <v-flex xs12 class="subheading">Product/Service</v-flex>
          <v-flex xs12>
            <v-layout row wrap style="position:relative" class="pb-3">
              <v-flex xs6>
                <v-text-field v-model="invoice.product" :rules="productRules" label="Product" required></v-text-field>
              </v-flex>
              <v-flex xs3>
                <v-text-field v-model="invoice.price" :rules="priceRules" label="Price" required></v-text-field>
              </v-flex>
              <v-flex xs3>
                <v-text-field v-model="invoice.qty" :rules="qtyRules" label="Qantity" required></v-text-field>
              </v-flex>
              <v-btn absolute dark fab small bottom right color="pink" @click="addProductRow">
                <v-icon>add</v-icon>
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-btn class="mx-0" large color="cyan"  dark depressed  @click="createInvoice">Create</v-btn>

      </v-card-text>
      </v-form>
    </v-card>

  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    invoice: {
      fullName: '',
      companyName: '',
      address: '',
      country: '',
      product: '',
      price: '',
      qty: ''
    },
    email: '',
    phone: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length > 3 || 'Name must be more than 3 characters'
    ],
    companyNameRules: [
      v => !!v || 'Company is required',
      v => v.length > 3 || 'Company must be more than 3 characters'
    ],
    addressRules: [
      v => !!v || 'Adress is required',
      v => v.length > 3 || 'Adress must be more than 3 characters'
    ],
    countryRules: [
      v => !!v || 'Country is required',
      v => v.length > 3 || 'Country must be more than 3 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    phoneRules: [
      v => !!v || 'Phone is required',
      v => /^[0-9 ()+]+$/.test(v) || 'Phone must be valid'
    ],
    productRules: [
      v => !!v || 'Product is required'
    ],
    priceRules: [
      v => !!v || 'Price is required',
      v => /^[0-9]+$/.test(v) || 'Price must be valid'
    ],
    qtyRules: [
      v => !!v || 'Qantity is required',
      v => /^[0-9]+$/.test(v) || 'Quantityy must be valid'
    ]

  }),
  methods: {
    createInvoice () {
      if (this.valid) {
        alert('invoice created')
        this.$store.dispatch('ADD_INVOICE', this.invoice)
      }
    },
    addProductRow () {
    }
  },
  mounted () {

  }
}
</script>

<style>
</style>
