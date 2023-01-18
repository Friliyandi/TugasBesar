<style>
    h4
    {
        color: black;
    }
</style>
<template>
  <div class="container mt-custom">
      <div class="row">
          <div class="col-md-12">
              <div class="card border-0 rounded shadow">
                  <div class="card-body">
                      <h4>EDIT TABEL</h4>
                      <hr>
                      <div v-if="validation.errors" class="mt-2 alert alert-danger">
                          <ul class="mt-0 mb-0">
                              <li v-for="(error, index) in validation.errors" :key="index">{{ `${error.param} : ${error.msg}` }}</li>
                          </ul>
                      </div>
                      <form @submit.prevent="update">
                          <div class="form-group">
                              <label for="nama_barang" class="font-weight-bold mb-2">Nama Barang</label>
                              <input class="form-control" v-model="post.nama_barang" placeholder="Masukkan Nama">
                          </div>
                          <div class="form-group mt-3">
                              <label for="merk" class="font-weight-bold mb-2">Merk</label>
                              <input class="form-control" v-model="post.merk" placeholder="Masukkan Nama Merk">
                          </div>
                          <div class="form-group mt-3">
                              <label for="harga" class="font-weight-bold mb-2">Harga</label>
                              <input class="form-control" v-model="post.harga" placeholder="Masukkan Harga">
                          </div>
                          <div class="form-group mt-3">
                              <label for="tanggal">Tanggal</label>
                              <input type="date" id="tanggal" v-model="post.tanggal" class="form-control" >
                          </div>
                          <div class="form-group" style="margin-top:30px; float:right">
                              <button type="submit" class="btn btn-md btn-success" style="margin-right:10px">SIMPAN</button>
                              <button type="reset" class="btn btn-md btn-danger">RESET</button>
                        </div>
                      </form>                        

                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

export default {

  setup() {

      //state posts
      const post = reactive({
          nama_barang: '',
          merk:'',
          harga: '',
          tanggal:'',
      })

      //state validation
      const validation = ref([])

      //vue router
      const router = useRouter()

      //vue router
      const route = useRoute()

      //mounted
      onMounted(() => {

          //get API from Backend
          axios.get(`http://localhost:3000/api/gudang_makanan/${route.params.id}`)
          .then(response => {
            
            //assign state posts with response data
            post.nama_barang = response.data.data.nama_barang  
            post.merk = response.data.data.merk
            post.harga = response.data.data.harga  
            post.tanggal = response.data.data.tanggal 
          }).catch(error => {
              console.log(error.response.data)
          })

      })

      //method update
      function update() {

          let nama_barang = post.nama_barang
          let merk = post.merk
          let harga = post.harga
          let tanggal = post.tanggal

          axios.patch(`http://localhost:3000/api/gudang_makanan/update/${route.params.id}`, {
              nama_barang: nama_barang,
              merk: merk,
              harga: harga,
              tanggal: tanggal,

          }).then((response) => {

              //redirect ke post index
              router.push({
                  name: 'index'
              })

          }).catch(error => {
              //assign state validation with error 
              validation.value = error.response.data
          })

      }

      //return
      return {
          post,
          validation,
          router,
          update
      }

  }

}
</script>