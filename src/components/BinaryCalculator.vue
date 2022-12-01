<template>
    <section>
        <form action="" @submit.prevent="submitBinary">
            <div id="binary-to-decimal">
                <input type="number" v-model="enteredBinary" />
                <button>Calculate!</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            enteredBinary: "",
            binary: [],
            bin: 0,
            error: "Wrong number. Instead use only 0 and 1 eg. 1101101"
        }
    },
    methods: {
        submitBinary() {
            this.binary = Array.from(String(this.enteredBinary), Number);
            for (let i = 0; i <= this.binary.length - 1; i++) {
                if (this.binary[i] == 1 || this.binary[i] == 0) {
                    this.bin++;
                }
            }
            if (this.bin === this.binary.length) {
                this.$emit("your-result", this.binary);
                this.bin = 0;
                return;
            } else {
                this.$emit("app-err", this.error);
                this.bin = 0;
                return;
            }
        }
    }
}
</script>

<style lang="scss">
form {
    width: 100%;
    display: flex;
    justify-content: center;
}

#binary-to-decimal {
    input {
        height: 2rem;
        background-color: #e4ae1c;
        border: none;
        border-radius: 15px;
        color: rgb(49, 49, 48);
        font-size: 1.3rem;
        font-weight: bold;
        text-align: center;
    }

    button {
        height: 2.5rem;
        margin-left: 1rem;
        border: none;
        border-radius: 15px;
        background-color:#0e0d0f;
        color:  #e4ae1c ;
        font-size: 1.3rem;
        font-weight: bold;
        cursor: pointer;
    }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
}
</style>