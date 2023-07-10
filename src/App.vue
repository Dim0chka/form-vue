<template>
	<el-container class="container">
		<el-form 
			label-position="top"
			style="width: 900px"
			size="large"
			:model="info"
			@submit.prevent 
			v-if="!nextPage"
			>
			<app-progress-bar :cur="validField" :max="info.length"/>
			<app-input-field
				v-for="val, i in info" :key="i"
				:label="val.label"
				:value="val.value"
				:valid="val.valid"

				@updated="onUpdated(i, $event)"
				>
			</app-input-field>
			<el-button :type="checkValid ? 'success' : 'danger'" :disabled="!checkValid" @click="showModal">Send Data</el-button>
		</el-form>
		<el-text v-else type="success" style="font-size: 40px;">
			All done 
		</el-text>
		<el-dialog v-model="dialogVisible" title="Check data">
			<el-table border :data="info" style="width: 100%">
				<el-table-column type="index" width="50" />
				<el-table-column prop="label" label="Label" width="300" />
				<el-table-column prop="value" label="Value"  />
			</el-table>
			<template #footer>
				<el-button  @click="dialogVisible = false">Cancel</el-button>
				<el-button type="success" @click="sendForm">Confirm</el-button>
			</template>
    	</el-dialog>

	</el-container>
</template>

<script>
import AppInputField from './components/AppInputField.vue';
import AppProgressBar from './components/AppProgressBar.vue';

export default {
  components: {
    AppInputField, AppProgressBar
  },
  data() {
    return {
      info: [
		{
			label: 'Name',
			value: 'dd',
			pattern: /^[a-zA-Z ]{2,30}$/
		},
		{
			label: 'Phone',
			value: '',
			pattern: /^[0-9]{7,14}$/
		},
		{
			label: 'Email',
			value: '',
			pattern: /.+/
		},
		{
			label: 'Some Field 1',
			value: '',
			pattern: /.+/
		},
		{
			label: 'Some Field 2',
			value: '',
			pattern: /.+/
		}
		],
		nextPage: false,
		dialogVisible: false
    }
  },
  methods: {
		onUpdated(i, val){
			let field = this.info[i];
			field.value = val.trim();
			field.valid = field.pattern.test(field.value);
		},
		showModal() {
			if (this.checkValid) {
				this.dialogVisible = true 
			}
		},
		sendForm() {
			this.dialogVisible = false 
			this.nextPage = true 
		}
	},
	computed: {
		validField() {
			return this.info.filter(field => { return field.valid }).length
		},
		
		checkValid() {
			return this.validField === this.info.length
		}
	},
	created(){
		this.info.forEach(field => {
			field.valid = false;
		})
	}
}
</script>

<style>
body {
	font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

.container {
	max-width: 1240px;
	margin: 0 auto;
}
</style>