const { somar } = require('../../services/operacoes')

describe('Testes relaciondos a função somar', () => {
    it('somar dois numeros', () => {
        const result = somar(1,2)
        expect(result).toBe(3)
    })

    it('somar dois numeros negativos', () => {
        const result = somar(-1,-2)
        expect(result).toBe(-3)
    })

    it('somar um numero com zero', () => {
        const result = somar(-1, 0)
        expect(result).toBe(-1)
    })
    
    it('somar letras', () => {
        const result = somar('a', 0)
        expect(result).toBe('favor informar somente números')
    })
    it('somar letras', () => {
        const result = somar(0, 'a')
        expect(result).toBe('favor informar somente números')
    })
})