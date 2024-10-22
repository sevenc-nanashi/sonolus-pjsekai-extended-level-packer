<script setup lang="ts">
import VField from './VField.vue'

defineProps<{
    label: string
    placeholder: string
    maxlength?: number
    required?: boolean
}>()

const modelValue = defineModel<string>({ required: true })
</script>

<template>
    <VField :label>
        <textarea
            v-model="modelValue"
            class="h-32 w-full appearance-none bg-button-normal px-2 py-1 transition-colors placeholder:italic placeholder:text-text-disabled hover:bg-button-highlighted focus:outline-none focus:ring-1 focus:ring-text-normal active:bg-button-pressed"
            type="text"
            :placeholder
            :maxlength
            :required
        />
    </VField>
</template>
