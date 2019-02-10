<template>
  <v-container grid-list-md>
    <v-card>
      <v-toolbar color="cyan" dark flat>
        <v-toolbar-title>Create invoice</v-toolbar-title>
      </v-toolbar>
    <v-form v-model="valid" ref=form>
      <v-card-text>
        <v-layout row wrap class="mb-2">
          <v-flex xs12 class="subheading">Recicipent</v-flex>
          <v-flex xs12 md6>
            <v-text-field v-model="firstname" :rules="nameRules" label="First name" required></v-text-field>
          </v-flex>

          <v-flex xs12 md6>
            <v-text-field v-model="lastname" :rules="nameRules" label="Last name" required></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field v-model="phone" :rules="phoneRules" label="Phone" required></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="mb-2">
          <v-flex xs12 class="subheading">Product/Service</v-flex>
          <v-flex xs12>
            <v-layout row wrap style="position:relative" class="pb-3">
              <v-flex xs6>
                <v-text-field v-model="product" :rules="productRules" label="Product" required></v-text-field>
              </v-flex>
              <v-flex xs3>
                <v-text-field v-model="price" :rules="priceRules" label="Price" required></v-text-field>
              </v-flex>
              <v-flex xs3>
                <v-text-field v-model="qty" :rules="qtyRules" label="Qantity" required></v-text-field>
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
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    phone: '',
    phoneRules: [
      v => !!v || 'Phone is required',
      v => /^[0-9 ()+]+$/.test(v) || 'Phone must be valid'
    ],
    product: '',
    productRules: [
      v => !!v || 'Product is required'
    ],
    price: '',
    priceRules: [
      v => !!v || 'Price is required',
      v => /^[0-9]+$/.test(v) || 'Price must be valid'
    ],
    qty: '',
    qtyRules: [
      v => !!v || 'Qantity is required',
      v => /^[0-9]+$/.test(v) || 'Quantityy must be valid'
    ]

  }),
  methods: {
    createInvoice () {
      if (this.valid) {
        alert('invoice created')
        this.$refs.form.reset()
      }
    },
    addProductRow () {
    }
  }
}
</script>

<style>
</style>
