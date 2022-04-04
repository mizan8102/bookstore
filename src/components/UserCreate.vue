<template>
    <div class="card card-body mt-4">
        <form @submit.prevent="onSubmit">
              <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Email</label>
        <input
          v-model="form.email"
          class="form-control"
          type="email"
          required
        />
      </div>

      <button type="submit" class="btn btn-success mt-3">
        Create User
      </button>
        </form>
    </div>
</template>
<script>
import { reactive } from 'vue'
import { createUser } from '@/services'
export default {
  setup() {
    const form = reactive({ name: '', email: '' })
    const onSubmit = async () => {
      createUser(form,"users")
    }
    return { form, onSubmit }
  },
}
</script>