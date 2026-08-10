<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile, heroSnippets } from '../data.js'

const typed = ref('')
const cursorVisible = ref(true)
let snippetIndex = 0
let charIndex = 0
let typingTimeout
let cursorInterval

function typeLoop() {
  const current = heroSnippets[snippetIndex]

  if (charIndex <= current.length) {
    typed.value = current.slice(0, charIndex)
    charIndex++
    typingTimeout = setTimeout(typeLoop, 55)
  } else {
    typingTimeout = setTimeout(() => {
      eraseLoop()
    }, 1400)
  }
}

function eraseLoop() {
  const current = heroSnippets[snippetIndex]
  if (charIndex >= 0) {
    typed.value = current.slice(0, charIndex)
    charIndex--
    typingTimeout = setTimeout(eraseLoop, 25)
  } else {
    snippetIndex = (snippetIndex + 1) % heroSnippets.length
    charIndex = 0
    typingTimeout = setTimeout(typeLoop, 300)
  }
}

onMounted(() => {
  typingTimeout = setTimeout(typeLoop, 500)
  cursorInterval = setInterval(() => {
    cursorVisible.value = !cursorVisible.value
  }, 530)
})

onUnmounted(() => {
  clearTimeout(typingTimeout)
  clearInterval(cursorInterval)
})
</script>

<template>
  <section class="hero">
    <div class="wrap hero__inner">
      <p class="eyebrow">disponível para novos projetos</p>

      <h1 class="hero__title">
        {{ profile.name }}<br />
        <span class="hero__title--soft">{{ profile.role }}</span>
      </h1>

      <p class="hero__tagline">{{ profile.tagline }}</p>

      <div class="hero__console mono" aria-hidden="true">
        <span class="hero__prompt">&gt;</span>
        <span class="hero__typed">{{ typed }}</span
        ><span class="hero__cursor" :class="{ 'is-visible': cursorVisible }">&#9608;</span>
      </div>

      <div class="hero__actions">
        <a href="#projetos" class="btn btn--primary">ver projetos</a>
        <a href="#contato" class="btn btn--ghost">entrar em contato</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: clamp(4rem, 10vw, 7rem);
  padding-bottom: clamp(3rem, 8vw, 5rem);
}

.hero__title {
  font-size: clamp(2.4rem, 6vw, 4.2rem);
  color: var(--ink);
}

.hero__title--soft {
  color: var(--ink-soft);
  font-weight: 500;
}

.hero__tagline {
  margin-top: 1.5rem;
  max-width: 34rem;
  font-size: 1.15rem;
  color: var(--ink-soft);
}

.hero__console {
  margin-top: 2.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--ink);
  color: #e8e8e3;
  padding: 0.9rem 1.15rem;
  border-radius: 8px;
  font-size: 0.9rem;
  min-width: min(28rem, 100%);
}

.hero__prompt {
  color: var(--signal);
}

.hero__cursor {
  opacity: 0;
  color: var(--signal);
}

.hero__cursor.is-visible {
  opacity: 1;
}

.hero__actions {
  margin-top: 2.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  text-decoration: none;
  padding: 0.75rem 1.4rem;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: transform 0.15s ease, background 0.15s ease, border-color 0.15s ease;
}

.btn--primary {
  background: var(--ink);
  color: var(--bg);
}

.btn--primary:hover {
  transform: translateY(-1px);
}

.btn--ghost {
  border-color: var(--line);
  color: var(--ink);
}

.btn--ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
}
</style>
