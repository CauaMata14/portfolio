<script setup>
import { profile } from '../data.js'
</script>

<template>
  <section id="sobre" class="about">
    <div class="wrap">
      <p class="eyebrow mono">&lt;sobre&gt;</p>
      <div class="about__grid">
        <p class="about__bio">{{ profile.bio }}</p>
        <dl class="about__meta mono">
          <div>
            <dt>local</dt>
            <dd>{{ profile.location }}</dd>
          </div>
          <div>
            <dt>foco</dt>
            <dd>{{ profile.role }}</dd>
          </div>
          <div>
            <dt>contato</dt>
            <dd>{{ profile.email }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: clamp(3rem, 8vw, 5rem) 0;
  border-top: 1px solid var(--line);
}

.about__grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: clamp(2rem, 6vw, 4rem);
  align-items: start;
}

.about__bio {
  font-size: 1.35rem;
  line-height: 1.5;
  color: var(--ink);
  max-width: 38rem;
}

.about__meta {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  margin: 0;
}

.about__meta div {
  border-left: 2px solid var(--accent-soft);
  padding-left: 1rem;
}

.about__meta dt {
  font-size: 0.75rem;
  color: var(--ink-soft);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.about__meta dd {
  margin: 0.2rem 0 0;
  font-size: 0.95rem;
  color: var(--ink);
}

@media (max-width: 720px) {
  .about__grid {
    grid-template-columns: 1fr;
  }
}
</style>
