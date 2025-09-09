<template>
  <span class="service-badge" :class="serviceClass">
    {{ service }}
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  service: {
    type: String,
    required: true
  }
})

const serviceClass = computed(() => {
  const service = props.service.toLowerCase()
  if (service.includes('lambda')) return 'lambda'
  if (service.includes('stepfunctions')) return 'stepfunctions'
  if (service.includes('eventbridge')) return 'eventbridge'
  if (service.includes('cognito')) return 'cognito'
  if (service.includes('cloudfront')) return 'cloudfront'
  return 'default'
})
</script>

<style scoped>
.service-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  margin: 2px;
  color: white;
}

.lambda { background: #ff9900; }
.stepfunctions { background: #e7157b; }
.eventbridge { background: #ff4b4b; }
.cognito { background: #dd344c; }
.cloudfront { background: #9d5025; }
.default { background: #666; }
</style>