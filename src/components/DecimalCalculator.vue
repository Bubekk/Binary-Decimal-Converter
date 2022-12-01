<template>
    <form action="" @submit.prevent="submitDecimal">
        <div id="decimal-to-binary">
            <input type="number" v-model="decimal" />
            <button>Calculate!</button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            decimal: ""
        }
    },
    methods: {
        submitDecimal() {
            this.$emit("your-result", this.decimal)
            this.decimal = "";
        }
    }
}
</script>

<style lang="scss">
    #decimal-to-binary {
    input {
        height: 2rem;
        background-color: #0e0d0f;
        border: none;
        border-radius: 15px;
        color: #e4ae1c;
        font-size: 1.3rem;
        font-weight: bold;
        text-align: center;
    }

    button {
        height: 2.5rem;
        margin-left: 1rem;
        border: none;
        border-radius: 15px;
        background-color: #e4ae1c;
        color: rgb(49, 49, 48);
        font-size: 1.3rem;
        font-weight: bold;
        cursor: pointer;
    }
}

</style>