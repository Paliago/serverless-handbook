<template>
  <div class="category-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div class="category-meta">
      <span v-if="count" class="item-count">{{ count }} items</span>
      <span v-if="difficulty" class="difficulty" :class="difficulty">
        {{ difficulty }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  },
  difficulty: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.category-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.category-card h3 {
  color: var(--vp-c-brand);
  margin: 0 0 12px 0;
}

.category-card p {
  flex: 1;
  margin-bottom: 16px;
  color: var(--vp-c-text-2);
}

.category-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}

.item-count {
  color: var(--vp-c-text-2);
}

.difficulty {
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 500;
}

.beginner {
  background: #d4edda;
  color: #155724;
}

.intermediate {
  background: #fff3cd;
  color: #856404;
}

.advanced {
  background: #f8d7da;
  color: #721c24;
}
</style>