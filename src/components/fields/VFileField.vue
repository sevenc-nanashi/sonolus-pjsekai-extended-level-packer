<script setup lang="ts">
import VField from './VField.vue'

defineProps<{
    label: string
    accept?: string
    required?: boolean
}>()

const modelValue = defineModel<File | undefined>({ required: true })

const onChange = (e: Event) => {
    modelValue.value = (e.target as HTMLInputElement).files?.[0]
}
</script>

<template>
    <VField :label>
        <input
            class="w-full appearance-none bg-button-normal px-2 py-1 transition-colors file:hidden hover:bg-button-highlighted focus:outline-none focus:ring-1 focus:ring-text-normal active:bg-button-pressed"
            :class="modelValue ? 'text-text-normal' : 'italic text-text-disabled'"
            type="file"
            :accept
            :required
            @change="onChange"
        />
    </VField>
</template>
