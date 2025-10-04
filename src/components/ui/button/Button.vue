<script setup lang="ts">

type Variant = 'primary' | 'secondary' | 'secondarySelectPrimary' | 'destructive' | 'success';

interface Props {
    variant?: Variant;
}

defineProps<Props>();


const variantClasses = {
    primary: 'button button-primary',
    secondary: 'button button-secondary',
    secondarySelectPrimary: 'button button-secondary-select-primary',
    destructive: 'button button-destructive',
    success: 'button button-success'
};

const getVariantClasses = (variant: Variant) => {
    return variantClasses[variant] || variantClasses.primary;
};

</script>

<template>
    <button
        :class="getVariantClasses(variant ?? 'primary')">
        <p class="text-center font-semibold"><slot></slot></p>
    </button>
</template>