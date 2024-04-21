const { div } = require("../../services/operacoes")

describe('Testes relaciondos a função dividir', () => {
    it('dividindo dois numeros', () => {
        const result = div(100,10)
        expect(result).toBe(10)
    })
    it('dividindo dois numeros negativos', () => {
        const result = div(-100,-10)
        expect(result).toBe(10)
    })
    it('dividindo por zero', () => {
        const result = div(100,0)
        expect(result).toBe(0)
    })
    it('dividindo o zero', () => {
        const result = div(0,10)
        expect(result).toBe(0)
    })
    it('dividindo dois numeros', () => {
        const result = div('a',10)
        expect(result).toBe('favor informar somente números')
    })
    it('dividindo dois numeros', () => {
        const result = div(100,'a')
        expect(result).toBe('favor informar somente números')
    })
})