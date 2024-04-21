const { sub } = require("../../services/operacoes")

describe('Testes relacionados a função subtrair', () => {
    it('subtrair dois numeros', () => {
        const result = sub(3,2)
        expect(result).toBe(1)
    })
    it('subtrair dois numeros negativos', () => {
        const result = sub(-3,-2)
        expect(result).toBe(-1)
    })
    it('subtrair um numero de zero', () => {
        const result = sub(3,0)
        expect(result).toBe(3)
    })
    it('subtrair letras', () => {
        const result = sub('a',2)
        expect(result).toBe('favor informar somente números')
    })
    it('subtrair letras', () => {
        const result = sub(3,'a')
        expect(result).toBe('favor informar somente números')
    })
})