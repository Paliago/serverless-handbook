<template>
  <div class="deploy-section">
    <h3>🚀 Deploy This Solution</h3>
    <div class="deploy-commands">
      <div 
        v-if="samCommand"
        class="code-block"
      >
        <div class="code-title">Deploy with SAM CLI</div>
        <pre><code>{{ samCommand }}</code></pre>
      </div>
      <div class="deploy-links">
        <a 
          v-if="githubLink"
          :href="githubLink"
          target="_blank"
          class="deploy-link github"
        >
          📂 View on GitHub
        </a>
        <a 
          v-if="blogLink"
          :href="blogLink" 
          target="_blank"
          class="deploy-link blog"
        >
          📖 Read Blog Post
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  samCommand: String,
  githubLink: String,
  blogLink: String
})
</script>

<style scoped>
.deploy-section {
  background: var(--vp-c-bg-soft);
  padding: 16px;
  border-radius: 8px;
  margin: 24px 0;
  border: 1px solid var(--vp-c-divider);
}

.code-block {
  background: var(--vp-code-block-bg);
  border-radius: 6px;
  padding: 16px;
  margin: 12px 0;
}

.code-title {
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
}

.code-block pre {
  margin: 0;
  overflow-x: auto;
}

.code-block code {
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-1);
}

.deploy-links {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}

.deploy-link {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s;
}

.deploy-link:hover {
  transform: translateY(-1px);
}

.github {
  background: #24292e;
  color: white;
}

.blog {
  background: var(--vp-c-brand);
  color: white;
}
</style>