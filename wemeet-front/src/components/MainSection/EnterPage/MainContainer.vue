<template>
    <div
        class="grid-background mt-5 flex align-items-center justify-content-center flex-wrap md:flex-nowrap"
        style="height: fit-content"
    >
        <image-slider></image-slider>
        <right-panel-enter></right-panel-enter>
    </div>
</template>

<script setup>
import ImageSlider from './ImageSlider.vue'
import RightPanelEnter from './RightPanel/RightPanelEnter.vue'
</script>

<style>
.grid-background {
    width: 100%;
    height: 100vh; /* или другая желаемая высота */
    background-color: white; /* или любой другой цвет фона */
    background-image: linear-gradient(to right, #e0e0e05e 1px, transparent 1px),
        linear-gradient(to bottom, #e0e0e05e 1px, transparent 1px);
    background-size: 200px 130px;
    background-position: -1px -1px;
}
</style>
