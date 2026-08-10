<script setup>
import { profile } from '../data.js'

const links = [
  { label: 'GitHub', href: 'https://github.com/CauaMata14' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cau%C3%A3-mata-994079296/' },
 
].filter((l) => l.href)
</script>

<template>
  <section id="contato" class="contact">
    <div class="wrap">
      <p class="eyebrow mono">&lt;contato&gt;</p>
      <h2 class="contact__title">
        Vamos conversar sobre<br />seu próximo projeto.
      </h2>
      <a :href="`mailto:${profile.email}`" class="contact__email mono">{{ profile.email }}</a>

      <div class="contact__links">
        <a v-for="link in links" :key="link.label" :href="link.href" target="_blank" rel="noopener">
          {{ link.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: clamp(3.5rem, 10vw, 6rem) 0 clamp(2rem, 6vw, 3rem);
  border-top: 1px solid var(--line);
}

.contact__title {
  font-size: clamp(1.8rem, 4.5vw, 3rem);
  max-width: 24ch;
}

.contact__email {
  display: inline-block;
  margin-top: 1.75rem;
  font-size: 1.1rem;
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px solid var(--accent);
  padding-bottom: 0.15rem;
}

.contact__links {
  margin-top: 2.5rem;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.contact__links a {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--ink-soft);
  text-decoration: none;
}

.contact__links a:hover {
  color: var(--accent);
}
</style>
