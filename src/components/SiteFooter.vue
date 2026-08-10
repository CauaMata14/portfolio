<script setup>
import { profile } from '../data.js'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="wrap footer__inner mono">
      <span>&copy; {{ year }} {{ profile.name }}</span>
      <span>construído com Vue</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
}

.footer__inner {
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: var(--ink-soft);
}
</style>
