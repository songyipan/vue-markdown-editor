<template>
  <input
    type="file"
    style="display: none"
    :key="key"
    :accept="uploadConfig.accept"
    :multiple="uploadConfig.multiple"
    @input="handleUpload"
    ref="fileInput"
  />
</template>

<script>
export default {
  name: 'v-md-upload-file',
  props: {
    uploadConfig: Object,
  },
  data () {
    return {
      handleUpload() {},
      key: 0,
    };
  },
  methods: {
    async upload() {
      const event = await this.chooseFile();

      return event;
    },
    chooseFile() {
      return new Promise(resolve => {
        this.handleUpload = (e) => {
          resolve(e);

          // Resolve the issue of uploading the same file without triggering a change event
          this.key++;
        };

        this.$refs.fileInput.click();
      });
    },
  },
};
</script>
