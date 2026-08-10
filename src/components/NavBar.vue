<script setup>
import { profile } from '../data.js'

const links = [
  { label: 'sobre', href: '#sobre' },
  { label: 'projetos', href: '#projetos' },
  { label: 'skills', href: '#skills' },
  { label: 'contato', href: '#contato' },
]
</script>

<template>
  <header class="nav">
    <div class="wrap nav__inner">
      <a href="#" class="nav__brand mono">{{ profile.name.split(' ')[0] }}.dev</a>
      <nav class="nav__links">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav__brand {
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  color: var(--ink);
}

.nav__links {
  display: flex;
  gap: 2rem;
}

.nav__links a {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  text-decoration: none;
  color: var(--ink-soft);
  transition: color 0.15s ease;
}

.nav__links a:hover,
.nav__links a:focus-visible {
  color: var(--accent);
}

@media (max-width: 560px) {
  .nav__links {
    gap: 1.1rem;
  }
}
</style>
