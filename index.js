const app = Vue.createApp({
    data() {
        return {
            display: "0",
            numeroAnterior: null,
            numeroAtual: null,
            operador: null
        };
    },
    methods: {
        lidarBotao(valor) {
            switch (valor) {
                case '*':
                case '/':
                case '-':
                case '+':
                    this.lidarOperador(valor);
                    break;
                case '.':
                    this.lidarDecimal();
                    break;
                case 'C':
                    this.lidarLimpar();
                    break;
                case '=':
                    this.lidarIgual();
                    break;
                default:
                    this.lidarNumero(valor);
            }
        },
        lidarOperador(valor) {
            if (this.numeroAnterior === null) {
                this.numeroAnterior = parseFloat(this.display);
                this.display = " ";
            }
            this.operador = valor;
            
        },
        lidarDecimal() {
            if (!this.display.includes('.')) {
                this.display += '.';
            }
        },
        lidarLimpar() {
            this.display = '0';
            this.numeroAtual = null;
            this.numeroAnterior = null;
            this.operador = null;
        },
        lidarIgual() {
            if (this.operador && this.numeroAnterior !== null) {
                this.numeroAtual = parseFloat(this.display);
                let resultado;
                switch (this.operador) {
                    case '+':
                        resultado = this.numeroAnterior + this.numeroAtual;
                        break;
                    case '-':
                        resultado = this.numeroAnterior - this.numeroAtual;
                        break;
                    case '*':
                        resultado = this.numeroAnterior * this.numeroAtual;
                        break;
                    case '/':
                        resultado = this.numeroAnterior / this.numeroAtual;
                        break;
                }
                this.display = resultado.toString();
                this.numeroAnterior = resultado;
                this.numeroAtual = null;
                this.operador = null;
            }
        },
        lidarNumero(valor) {
            if (this.display === "0") {
                this.display = valor;
            } else {
                this.display += valor;
            }
        }
    }
});

app.mount("#app");
