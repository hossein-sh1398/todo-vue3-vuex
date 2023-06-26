<template>
    <div class="card">
        <div class="card-header">
            <div class="card-title">
                File Upload
            </div>
        </div>
        <div class="card-body">
            <form @submit.prevent="upload" enctype="multipart/form-data">
                <div class="mb-3">
                    <input type="file" @change="selectFile($event)">
                    <br>
                    <div class="my-3">
                        <img :src="src" ref="file_preview" alt="img" :style="{
                            width: '100px', height: '100px', borderRadius: '100%'
                        }">
                    </div>
                    <div v-text="width" :style="{
                        backgroundColor: '#33bd27', color: 'white', lineHeight: '30px', fontSize: '10px', height: '30px', textAlign: 'center', width: width
                    }">
                    </div>


                </div>
                <button :disabled="uploading" class="btn btn-primary btn-sm">Upload</button>
            </form>
        </div>
    </div>
</template>

<script>
import apiTask from '../api/apiTask.js'
import { ref } from 'vue';

export default {
    setup() {
        let file = ref()
        let uploading = ref(false)
        let width = ref('0%')
        let file_preview = ref('')
        let src = ref('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNiudwKFZLpUZ1aO6VKnZvqxdWSdvhAb_9B5S191KiQ&s')

        function selectFile(e,) {
            file.value = e.target.files[0]

            if (e.target.files.length > 0) {
                file_preview.value.src = URL.createObjectURL(e.target.files[0]);
            }

        }
        async function upload() {
            uploading.value = true
            width.value = '0%'
            if (file.value) {
                let formData = new FormData
                formData.append('file', file.value)
                const config = {
                    Headers: {
                        "Content-Type": "multipart/form-data"
                    },
                    onUploadProgress: progressEvent => {
                        const { loaded, total } = progressEvent;
                        let percent = Math.floor((loaded * 100) / total)
                        width.value = percent + '%'
                        //console.log(`${loaded} bytes of ${total} bytes. ${percent}%`);
                    }
                }
                await apiTask.post('/upload', formData, config)
                uploading.value = false
            }
        }
        return {
            selectFile,
            upload,
            file_preview,
            src,
            width,
            uploading,
        }
    }
}
</script>