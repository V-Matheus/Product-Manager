<script setup lang="ts">
import { CiSearch } from 'vue-icons-plus/ci'
</script>

<template>
  <main>
    <h1>Products</h1>

    <label class="search-bar">
      <CiSearch />
      <input type="text" placeholder="Search products..." />
    </label>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Solar Panel</td>
          <td>R$200</td>
          <td>50</td>
          <td class="cancelled">Cancelado</td>
        </tr>

        <tr>
          <td>1</td>
          <td>Solar Panel</td>
          <td>R$200</td>
          <td>50</td>
          <td class="in-progress">Em andamento</td>
        </tr>

        <tr>
          <td>1</td>
          <td>Solar Panel</td>
          <td>R$200</td>
          <td>50</td>
          <td class="delivered">Entregue</td>
        </tr>
      </tbody>
    </table>

    <button>Add Product</button>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-content: end;
  gap: 1rem;
  flex: 1;
  padding: 2rem 10rem;
  background-color: #ffffff;
  color: #121417;
}

h1 {
  font-family: 'Inter' sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;

  color: #121417;
}

.search-bar {
  display: flex;
  cursor: text;
  gap: 0.5rem;
  background: #f0f2f5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
}

.search-bar input {
  display: flex;
  flex: 1;
}

table {
  border: 1px solid #dbe0e6;
  border-radius: 8px;
}

td,
th {
  border-bottom: 1px solid #dbe0e6;
  padding: 0.75rem 1rem;
  text-align: start;
}

tbody tr:last-child td {
  border-bottom: none;
}

.delivered {
  color: #24c72f;
}

.cancelled {
  color: #f24c4c;
}

.in-progress {
  color: #f2a424;
}

button {
  display: flex;
  padding: 0.625rem 1rem;

  background: #248cf2;
  border-radius: 8px;

  font-weight: 700;
  font-size: 14px;
  line-height: 21px;

  color: #ffffff;
  margin-left: auto;
}
</style>
