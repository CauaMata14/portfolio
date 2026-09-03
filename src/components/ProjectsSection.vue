<script setup>
import { projects } from '../data.js'
</script>

<template>
  <section id="projetos" class="projects">
    <div class="wrap">
      <p class="eyebrow mono">&lt;projetos&gt;</p>
      <h2 class="projects__title">Coisas que eu construí</h2>

      <div class="projects__grid">
        <article v-for="project in projects" :key="project.title" class="card">
          <div class="card__top">
            <h3>{{ project.title }}</h3>
            <div class="card__links">
              <a v-if="project.url && project.url !== '#'" :href="project.url" target="_blank" rel="noopener" aria-label="Ver projeto ao vivo">visitar</a>
              <a v-if="project.repo && project.repo !== '#'" :href="project.repo" target="_blank" rel="noopener" aria-label="Ver código no GitHub">código</a>
            </div>
          </div>
          <p class="card__desc">{{ project.description }}</p>
          <p v-if="project.emConstrucao" class="card__wip mono">
            Em construção<span class="dots"><span>.</span><span>.</span><span>.</span></span>
          </p>
          <ul v-else class="card__tech mono">
            <li v-for="t in project.tech" :key="t">{{ t }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: clamp(3rem, 8vw, 5rem) 0;
  border-top: 1px solid var(--line);
}

.projects__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  margin-bottom: 2.5rem;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.card {
  background: var(--bg-raised);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.card__top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
}

.card__top h3 {
  font-size: 1.15rem;
}

.card__links {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.card__links a {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px solid transparent;
}

.card__links a:hover {
  border-color: var(--accent);
}

.card__desc {
  color: var(--ink-soft);
  font-size: 0.95rem;
  flex-grow: 1;
}

.card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.card__tech li {
  font-size: 0.72rem;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
}

.card__wip {
  font-size: 0.78rem;
  color: var(--ink-soft);
  opacity: 0.8;
}

.dots span {
  animation: dots-blink 1.4s infinite;
  animation-fill-mode: both;
}

.dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.dots span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes dots-blink {
  0%,
  80%,
  100% {
    opacity: 0.2;
  }
  40% {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dots span {
    animation: none;
    opacity: 1;
  }
}
</style>
