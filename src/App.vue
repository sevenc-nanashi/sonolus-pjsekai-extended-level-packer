<script setup lang="ts">
import { version } from '@sonolus/core'
import { version as engineVersion } from 'sonolus-pjsekai-engine'
import { ref } from 'vue'
import { version as appVersion } from '../package.json'
import VLink from './components/VLink.vue'
import VFileField from './components/fields/VFileField.vue'
import VNumberField from './components/fields/VNumberField.vue'
import VTextAreaField from './components/fields/VTextAreaField.vue'
import VTextField from './components/fields/VTextField.vue'
import { pack } from './packer'

const title = ref('')
const artists = ref('')
const author = ref('')
const rating = ref(0)
const cover = ref<File>()
const bgm = ref<File>()
const preview = ref<File>()
const chart = ref<File>()
const offset = ref(0)
const description = ref('')

const state = ref<{ type: 'packing' } | { type: 'success' } | { type: 'error'; error: unknown }>()

const onPack = async () => {
    state.value = { type: 'packing' }

    try {
        await pack({
            title: title.value,
            artists: artists.value,
            author: author.value,
            rating: rating.value,
            cover: cover.value,
            bgm: bgm.value,
            preview: preview.value,
            chart: chart.value,
            offset: offset.value,
            description: description.value,
        })

        state.value = { type: 'success' }

        await new Promise((resolve) => setTimeout(resolve, 2000))

        state.value = undefined
    } catch (error) {
        console.error(error)

        state.value = { type: 'error', error }
    }
}

const onClose = () => {
    state.value = undefined
}
</script>

<template>
    <h1 class="text-center text-xl font-bold sm:text-3xl">Sonolus PJSekai Level Packer</h1>

    <p>
        Pack your Project Sekai: Colorful Stage! levels into Sonolus collection packages. <br />
        For publishing and sharing your PJSekai levels, take a look at:
        <VLink url="https://cc.sevenc7c.com" /> <br />
        <br />
        Sonolus: <br />
        Version {{ version.sonolus }} <br />
        <VLink url="https://sonolus.com" /> <br />
        <br />
        Engine: <br />
        Version {{ engineVersion }} <br />
        <VLink url="https://github.com/NonSpicyBurrito/sonolus-pjsekai-engine" /> <br />
        <br />
        Packer: <br />
        Version {{ appVersion }} <br />
        <VLink url="https://github.com/NonSpicyBurrito/sonolus-pjsekai-level-packer" />
    </p>

    <form @submit.prevent="onPack">
        <div class="flex flex-col gap-4">
            <VTextField
                v-model="title"
                label="Title"
                placeholder="Enter level title..."
                :maxlength="256"
            />

            <VTextField
                v-model="artists"
                label="Artists"
                placeholder="Enter level artists..."
                :maxlength="256"
            />

            <VTextField
                v-model="author"
                label="Author"
                placeholder="Enter level author..."
                :maxlength="256"
            />

            <VNumberField
                v-model="rating"
                label="Rating"
                placeholder="Enter level rating..."
                :min="0"
                :max="40"
                :step="1"
            />

            <VFileField v-model="cover" label="Cover" accept="image/*" />

            <VFileField v-model="bgm" label="Bgm" accept="audio/*" />

            <VFileField v-model="preview" label="Preview" accept="audio/*" />

            <VFileField v-model="chart" label="Chart (SUS)" accept=".sus,.txt" />

            <VNumberField v-model="offset" label="Offset" placeholder="Enter level offset..." />

            <VTextAreaField
                v-model="description"
                label="Description"
                placeholder="Enter level description..."
                :maxlength="4096"
            />
        </div>

        <div class="mt-8 flex justify-center">
            <input
                class="min-w-32 bg-button-normal px-2 py-1 font-bold transition-colors hover:bg-button-highlighted focus:outline-none focus:ring-1 focus:ring-text-normal active:bg-button-pressed sm:min-w-36 sm:text-lg"
                type="submit"
                value="Pack"
            />
        </div>
    </form>

    <dialog
        v-if="state"
        :ref="(el) => (el as HTMLDialogElement | null)?.showModal()"
        class="max-w-2xl break-words bg-surface px-12 py-8 text-text-normal backdrop:bg-overlay-main focus:outline-none"
    >
        <p>
            <template v-if="state.type === 'packing'">Packing...</template>
            <template v-else-if="state.type === 'success'">Success, downloading...</template>
            <template v-else>
                Packing failed. <br />
                <br />
                {{ state.error }}
            </template>
        </p>

        <div v-if="state.type !== 'packing'" class="mt-8 flex justify-center">
            <button
                class="w-32 bg-button-normal px-2 py-1 transition-colors hover:bg-button-highlighted focus:outline-none focus:ring-1 focus:ring-text-normal active:bg-button-pressed"
                @click="onClose"
            >
                Close
            </button>
        </div>
    </dialog>
</template>
