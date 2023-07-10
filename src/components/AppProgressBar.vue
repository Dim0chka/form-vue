<template>
    <div class="progress">
        <el-progress 
            :percentage="progressValid"
            :text-inside="true"
            :stroke-width="20"
            :status="progressStatus"
        />
    </div>
</template>

<script>
export default {
    name: 'app-progress-bar',
    props: {
        cur: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        }
    },
    computed: {
        progressValid() {
			return this.cur/this.max * 100
		},
        progressStatus() {
            if (this.progressValid <= 50) {
                return "exception"
            }
            if (this.progressValid > 50 && this.progressValid <= 80) {
                return "warning"
            } 
            return "success"
        }
    }
}
</script>

<style scoped>
.progress {
    margin-bottom: 20px;
}
</style>