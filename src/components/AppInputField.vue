<template>
        <el-col>
            <el-form-item
                prop="text" :rules="{ required: !valid, message: 'Введите корректные данные', trigger: 'change'}"
                >
                <template #label>
                    {{ label }}
                    <transition 
                        v-if="activated"
                        name="icon" 
                        mode="out-in" 
                        appear
				        appear-active-class="appear-icon"
                        >
                        <font-awesome-icon 
                            :key="fieldValid"
                            :color="ValidColor"
                            :icon="fieldValid"
                        />
                    </transition>
                </template>                    
                <el-input placeholder="Please input" :value="value" v-model="text"  @input="updateInput" autocomplete="off"/>
            </el-form-item>
        </el-col>
</template>

<script>
export default {
    name: 'app-input-field',
    props: {
        label: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        valid: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            activated: this.value != '',
            text: '',
            flipped: false 
        }
    },
    computed: {
        fieldValid() {
            return this.valid ? 'circle-check' : 'circle-exclamation'
        },
        ValidColor() {
            return this.valid ? '#67c23a' : '#f56c6c'
        }
    },
    methods: {
        updateInput() {
            this.activated = true
            this.$emit('updated', this.text)
        }
    }
}
</script>

<style scoped>
.icon-enter-active {
    animation: showIcon .5s;
}

.icon-leave-active {
    animation: flipIcon .5s;
}

.appear-icon {
    animation: appearIcon .5s ;
}

@keyframes appearIcon {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes showIcon {
    from {
        transform: rotateY(90deg);
    }

    to {
        transform: rotateY(0deg);
    }
}

@keyframes flipIcon {
    0% {
        transform: rotateY(0deg);
    }

    100% {
        transform: rotateY(90deg);
    }
}

</style>