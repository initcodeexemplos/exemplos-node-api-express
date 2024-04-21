const { mult } = require("../../services/operacoes")

describe('Testes relaciondos a função multiplicar', () => {
    it('multiplicando dois numeros', () => {
        const result = mult(2,2)
        expect(result).toBe(4)
    })
    it('multiplicando dois numeros negativos', () => {
        const result = mult(-2,-2)
        expect(result).toBe(4)
    })
    it('multiplicando um numero por zero', () => {
        const result = mult(10,0)
        expect(result).toBe(0)
    })
    it('multiplicando uma letra e um número', () => {
        const result = mult(1,'a')
        expect(result).toBe('favor informar somente números')
    })
    it('multiplicando dois numeros', () => {
        const result = mult('a',2)
        expect(result).toBe('favor informar somente números')
    })
})