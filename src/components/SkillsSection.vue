<script setup>
import { skills } from '../data.js'
</script>

<template>
  <section id="skills" class="skills">
    <div class="wrap">
      <p class="eyebrow mono">&lt;skills&gt;</p>
      <div class="skills__grid">
        <div v-for="group in skills" :key="group.group" class="skills__group">
          <h3 class="mono">{{ group.group }}</h3>
          <ul>
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: clamp(3rem, 8vw, 5rem) 0;
  border-top: 1px solid var(--line);
}

.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
}

.skills__group h3 {
  font-size: 0.8rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 1rem;
  font-weight: 500;
}

.skills__group ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.skills__group li {
  font-size: 1.05rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--line);
}
</style>
