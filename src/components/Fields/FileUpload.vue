<template>
  <div style="position: relative">
    <div class="d-flex flex-wrap items-center justify-space-between mb-2">
      <label :id="name" class="mb-2 d-flex align-center ga-2">
        <span v-html="label" class="text-primary font-weight-medium"> </span>
      </label>
      <slot />
    </div>
    <section
      class="file-upload"
      :class="{ 'file-upload__error': errorMessage }"
      draggable="false"
      @click="file_ref?.click()"
      @dragover.prevent
      @drop.prevent="onFileInputChange"
    >
      <v-icon size="x-large" color="primary">mdi-cloud-upload-outline</v-icon>
      <p class="test-medium-gray">{{ $t("drage_or_drop") }}</p>
      <strong>{{ $t("download_from_device") }}</strong>
      <div
        class="file-upload__preview"
        v-if="imagePreview || imgUrl || filePreview"
        @click.stop="file_ref?.click()"
      >
        <v-btn
          v-if="imagePreview || imgUrl || filePreview"
          @click.stop="onRemoveFile"
          icon
          size="x-small"
          color="error"
          position="absolute"
          location="left top"
          style="left: 10px; top: 10px"
        >
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
        <img v-if="imagePreview || imgUrl" :src="imagePreview" alt="photo" />
        <div
          class="d-flex items-center text-center justify-center flex-column"
          v-if="filePreview"
        >
          <a :href="filePreview" target="_blank">
            <v-icon size="x-large" style="font-size: 100px" color="red">
              mdi-file
            </v-icon>
          </a>
          <p class="text-primary font-weight-bold text-center">
            {{ uploadedFile?.name }}
          </p>
        </div>
      </div>
    </section>

    <transition name="scroll-y-transition" mode="out-in">
      <p class="text-error file-upload__error-message mt-1" v-if="errorMessage">
        {{ errorMessage }}
      </p>
    </transition>

    <input
      :accept="accept"
      type="file"
      hidden
      ref="file_ref"
      @input="onFileInputChange"
    />
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { withDefaults, defineProps } from "vue";
interface IProps {
  name: string;
  accept: string;
  label?: string;
  imgUrl?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  accept: ".png, .jpg, .jpeg",
});
const { handleChange, errorMessage, validate } = useField(props.name);

const file_ref = ref<HTMLInputElement>();
const emit = defineEmits(["onRemove", "onUpload"]);

const uploadedFile = ref<File>();
const filePreview = ref<string>();
const imagePreview = ref<string>();

const onFileInputChange = async (e: Event | DragEvent) => {
  let file: File | null = null;

  if (e instanceof DragEvent) {
    // Drag-and-drop event
    e.preventDefault();
    file = e.dataTransfer?.files[0] ?? null;
  } else {
    // File input change event
    const inputElement = e.target as HTMLInputElement;
    file = inputElement?.files && inputElement?.files[0];
  }

  file && handleChange(file);

  const { valid } = await validate();
  const extensions = file?.name.split(".")[1] as string;

  if (valid) {
    if (file) {
      if (props.accept.includes(extensions)) {
        filePreview.value = URL.createObjectURL(file);
      } else {
        imagePreview.value = URL.createObjectURL(file);
      }
      uploadedFile.value = file;
    }
    emit("onUpload", file);
  }
};
const onRemoveFile = () => {
  uploadedFile.value = undefined;
  handleChange(null);
  filePreview.value = undefined;
  imagePreview.value = undefined;

  emit("onRemove");
  const form = file_ref.value?.form;
  if (form) form.reset();
};
</script>
