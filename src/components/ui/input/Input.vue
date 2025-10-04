<script setup lang="ts">
const model = defineModel();

type InputType = 'text' | 'number';

interface Props {
    id?: string;
    placeholder?: string;
    type?: InputType;
}

defineProps<Props>();

</script>

<template>
    <div class="border border-secondary p-2 focus-within:border-primary rounded-sm">
        <input v-model="model" :type="type" :id="id" :placeholder="placeholder"
            class="w-full h-full outline-none text-center" />
    </div>
</template>