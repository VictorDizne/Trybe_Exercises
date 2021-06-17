const testScope = (escopo) => (escopo) ? `'Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo!'` : `'Não devo ser utilizada fora meu escopo (else)'`

testScope(true)
