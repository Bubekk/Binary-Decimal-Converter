<template>
    <div id="calc">
        <h2>Choose your conversion and write down your digits:
            <label @click="changeCalc" class="switch">
                <input type="checkbox" v-model="isChecked" />
                <span class="slider"><span class="btnText">Decimal</span><span class="btnText">Binary</span></span>
            </label>
        </h2>
        <section id="calculator">
            <decimal-calculator v-if="isChecked == false" @your-result="decimalToBinary"></decimal-calculator>
            <binary-calculator v-if="isChecked == true" @your-result="binaryToDecimal" @app-err="wrongNumbers">
            </binary-calculator>
            <div id="result">
                <p>Your Result: </p>
                <p id="res">{{ result }}</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            result: "",
            isChecked: false,
            content: "Decimal"
        }
    },
    methods: {
        changeCalc() {
            !this.isChecked;
            if (this.isChecked !== false) {
                this.content = "Binary";
            }
        },
        decimalToBinary(num) {
            const arrOfDec = [];

            for (let i = num; i >= 0; i--) {
                if (num !== 0) {
                    if (num % 2 === 0) {
                        arrOfDec.unshift("0");
                        num /= 2;
                    } else if (num % 2 === 1) {
                        arrOfDec.unshift("1");
                        num /= 2;
                        num = Math.floor(num);
                    }
                }
            }

            const dec = arrOfDec.join("");
            this.result = dec;
        },
        binaryToDecimal(arr) {
            let pow = arr.length;
            for (let i = 0; i <= arr.length - 1; i++) {
                pow--;
                arr[i] = arr[i] * Math.pow(2, pow);
            }

            this.result = arr.reduce(function (acc, val) { return acc + val; }, 0);
        },
        wrongNumbers(str) {
            this.result = str;
        }
    }
}
</script>

<style lang="scss">
#calc {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#calculator {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50vw;
    height: 35vh;
    padding: 50px;
    border-radius: 15px;
    background-color: rgb(24, 25, 26);

    #result {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: auto;
        height: 35%;
        margin: 2rem;
        padding: 1.5rem;
        border-radius: 15px;
        background-color: #c7962d;

        p {
            font-size: 1.5rem;
            font-weight: bold;
            margin: 0;
            color: rgb(24, 24, 26);
        }

        #res {
            font-size: 2.5rem;
            color: white;
        }
    }
}

.switch {
    position: relative;
    display: inline-block;
    width: 173px;
    height: 34px;
    margin-left: 30px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 34px;
    color: #c7962d;
    background-color: #17171a;
    -webkit-transition: .4s;
    transition: .4s;
    display: flex;
    justify-content: center;
    align-items: center;

    .btnText {
        width: 80px;
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
        -webkit-transition: .4s;
        transition: .4s;
    }
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 80px;
    left: 4px;
    bottom: 4px;
    border-radius: 34px;
    background-color: rgb(199, 161, 58);
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    color: #17171a;
    background-color: #e4ae1c;
}

input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
    background-color: rgb(33, 33, 36);
    -webkit-transform: translateX(85px);
    -ms-transform: translateX(85px);
    transform: translateX(85px);
}
</style>

