<template>
  <div>
    <div class="card nve-card">
      <div class="card-title-container">
        <p class="card-title">{{ title }}</p>
      </div>
      <p class="text"><slot></slot></p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style scoped>
.info-card {
  background: var(--feedback-background-default-info, #ceeaff);
  color: var(--feedback-foreground-default-info, #00131c);
}

.nve-card {
  background-color: #c8102e;
  color: var(--neutrals-background-primary, #ffffff);
  background-color: #c8102e;
  color: var(--neutrals-background-primary, #ffffff);
  min-height: 200px;
}

.card {
  display: flex;
  padding: var(--spacing-large, 24px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-small, 12px);
  align-self: stretch;
  border-radius: var(--borderRadius-small, 4px);
  margin-top: 3rem;
}

.card-title-container {
  display: flex;
  align-items: center;
}

.card-title {
  font-family: Source Sans Pro;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  text-align: left;
  margin: 0;
}

.text {
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  margin-top: 0;
}
</style>
