<template>
  <span class="difficulty-level" :class="level">
    <span class="icon">{{ icon }}</span>
    {{ displayText }}
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  level: {
    type: String,
    required: true,
    validator: (value) => ['beginner', 'intermediate', 'advanced'].includes(value)
  }
})

const icon = computed(() => {
  switch (props.level) {
    case 'beginner': return '🟢'
    case 'intermediate': return '🟡'
    case 'advanced': return '🔴'
    default: return '⚪'
  }
})

const displayText = computed(() => {
  return props.level.charAt(0).toUpperCase() + props.level.slice(1)
})
</script>

<style scoped>
.difficulty-level {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.icon {
  font-size: 10px;
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