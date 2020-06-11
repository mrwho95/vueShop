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
        <!-- <div class="row">
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
        </div> -->

        <hr />

        <h3 class="d-inline-block">Products List</h3>
        <button class="btn btn-primary float-right" @click="addNew">
          Add Product
        </button>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Tag</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id" >
                <td>{{ product.image }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.tag }}</td>
                <td>{{ product.description }}</td>
                <td>
                  <button class="btn btn-warning">
                    Edit
                  </button>
                  <button
                    class="btn btn-danger" @click="deleteProduct(product)"
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

    <!-- bootstrap modal -->
    <!-- Modal -->
    <div
      class="modal fade"
      id="product"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Edit Product</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <!-- main product -->
              <div class="col-md-8">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product Name"
                    v-model="product.name"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <!-- <vue-editor v-model="product.description"></vue-editor> -->
                  <textarea v-model="product.description" class="form-control" placeholder="Product Description" style="width:100%; height:100%;"></textarea>
                </div>
              </div>
              <!-- product sidebar -->
              <div class="col-md-4">
                <h4 class="display-6">Product Details</h4>
                <hr />

                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product price"
                    v-model="product.price"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    @keyup.188="addTag"
                    placeholder="Product tags"
                    v-model="product.tag"
                    class="form-control"
                  />

                  <!-- <div class="d-flex">
                    <p v-for="tag in product.tags" :key="tag">
                      <span class="p-1">{{ tag }}</span>
                    </p>
                  </div> -->
                </div>

                <div class="form-group">
                  <label for="product_image">Product Images</label>
                  <input
                    type="file"
                    @change="uploadImage"
                    class="form-control"
                  />
                </div>

                <div class="form-group d-flex">
                  <div
                    class="p-1"
                    v-for="(image, index) in product.images"
                    :key="index"
                  >
                    <div class="img-wrapp">
                      <img :src="image" alt="" width="80px" />
                      <span
                        class="delete-img"
                        @click="deleteImage(image, index)"
                        >X</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="addProduct()">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db} from "../firebase";
import $ from "jquery";
import Swal from "sweetalert2";

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
        description: null,
        tag: null,
        image: null
      },
      activeItem: null,
    };
  },
  firestore () {
    return {
        // Collection
        products: db.collection('products'),
        // Doc
        // ford: firestore.collection('cars').doc('ford')
    }
  },
  methods: {
    //methods function = @click
    addNew() {
      $("#product").modal("show");
    },
   
    updateData() {
      
    },
    editProduct() {
      
    },
    deleteProduct(doc) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.$firestore.products.doc(doc['.key']).delete();
          Swal.fire(
            'Deleted!',
            'Your data has been deleted.',
            'success'
          )
          // Toast.fire({
          //   icon: 'success',
          //   title: 'Signed in successfully'
          // })
        }
      })
    },
    readData() {
      
    },
    addProduct() {
      this.$firestore.products.add(
            this.product
        );
      $('#product').modal('hide');
    },

    
  },

  //auto run function
  created() {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-wrapp {
  position: relative;
}
.img-wrapp span.delete-img {
  position: absolute;
  top: -14px;
  left: -2px;
}
.img-wrapp span.delete-img:hover {
  cursor: pointer;
}
</style>
