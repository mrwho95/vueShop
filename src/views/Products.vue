<template>
  <div class="products">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Product Page</h3>
            <p>Hello World</p>
          </div>
          <div class="col-md-6">
            <img
              src="/img/svg/product.svg"
              alt="overview image"
              class="img-fluid"
            />
          </div>
        </div>
      </div>

      <hr />

      <h3>CRUD Product Firestore database</h3>
      <div class="product-test">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input
                type="text"
                v-model="product.name"
                placeholder="Product Name"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input
                type="text"
                v-model="product.price"
                placeholder="Product Price"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <button class="btn btn-primary" @click="saveData">Submit</button>
            </div>
          </div>
        </div>

        <hr />

        <h3>Products List</h3>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product">
                <td>{{ product.data().name }}</td>
                <td>{{ product.data().price }}</td>
                <td>
                  <button class="btn btn-warning">Edit</button>
                  <button
                    class="btn btn-danger"
                    @click="deleteProduct(product.id)"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";

export default {
  name: "Products",
  props: {
    msg: String,
  },
  data() {
    return {
      products: [],
      product: {
        name: null,
        price: null,
      },
    };
  },
  methods: {
    //methods function = @click
    deleteProduct(doc) {
      if (confirm("Are you sure to delete?")) {
        db.collection("products")
          .doc(doc)
          .delete()
          .then(function() {
            console.log("Document successfully deleted!");
          })
          .catch(function(error) {
            console.error("Error removing document: ", error);
          });
      }
    },
    readData() {
      db.collection("products")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            this.products.push(doc);
          });
        });
    },
    saveData() {
      db.collection("products")
        .add(this.product)
        .then((docRef) => {
          //es6 function
          console.log("Document written with ID: ", docRef.id);
          this.reset();
          this.readData();
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },

    reset() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
  },

  //auto run function
  created() {
    this.readData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
