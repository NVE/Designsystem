<template>
  <div v-if="variant === 'nve-card'">
    <div class="card nve-card">
      <div class="card-title-container">
        <p class="card-title">{{ title }}</p>
      </div>
      <p class="text"><slot></slot></p>
    </div>
  </div>
  <div v-if="variant === 'info'">
    <div class="card info-card">
      <div class="card-title-container">
        <nve-icon name="info" slot="prefix" style="font-size: 26px; padding-right: 8px"></nve-icon>
        <p class="card-title">{{ title }}</p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title: string;
  variant: string;
};

const { title } = withDefaults(defineProps<Props>(), {
  variant: 'info',
});
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
