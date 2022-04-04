<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="use in data" :key="use.key">
          <td>{{ use.name }}</td>
          <td>{{ use.email }}</td>

          <td>
            <router-link :to="`/edit/${use.key}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteUser(use.key)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadUsers } from '@/services'
export default {
   setup(){
    
    
  }, 
  mounted(){
      this.valueshow();
  },
  data(){
      return({
        data : [],
      })
  },
  methods:{
      valueshow(){
        const  users = useLoadUsers("users")
        users.then((res)=>{
            for(var i in res)
                this.data.push(res[i]);
        }).catch((err)=>{
            console.log(err.message)
        })
      }
  }
}
</script>