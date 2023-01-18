<style>
h4
{
    color:black
}
</style>
<template>
    <div class="container mt-custom">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>INSERT BARANG</h4>
                        <hr>
                        <div v-if="validation.errors" class="mt-2 alert alert-danger">
                            <ul class="mt-0 mb-0">
                                <li v-for="(error, index) in validation.errors" :key="index">{{ `${error.param} : ${error.msg}` }}</li>
                            </ul>
                        </div>
                        <form @submit.prevent="store">
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
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios'
  export default {
      setup() {
          //state posts
          const post = reactive({
              nama_barang: '',
              merk: '',
              harga:'',
              tanggal:'',
          })
          //state validation
          const validation = ref([])
          //vue router
          const router = useRouter()
          //method store
          function store() {
              let nama_barang = post.nama_barang
              let merk = post.merk
              let harga = post.harga
              let tanggal = post.tanggal
              axios.post('http://localhost:3000/api/gudang_makanan/store', {
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
              store
          }
      }
  }
  </script>