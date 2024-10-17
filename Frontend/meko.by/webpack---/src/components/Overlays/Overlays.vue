<template>
    <div>
        <UploadDialog />
        <ImagesPopup />
    </div>
</template>

<script>

import UploadDialog from './UploadDialog/UploadDialog'
import ImagesPopup from './ImagesPopup'

export default {
  name: 'Overlays',
  components: {
    ImagesPopup,
    UploadDialog
  }
}
</script>



// WEBPACK FOOTER //
// src/components/Overlays/Overlays.vue