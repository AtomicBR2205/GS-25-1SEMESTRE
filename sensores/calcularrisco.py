

def calcular_risco_inundacao(dados):
    # Exemplo de cálculo simples de risco baseado em nível de água e chuva
    nivel_agua = dados.get('Nivel_agua', 0)
    chuva = dados.get('Chuva', 0)
    risco = "baixo"

    if nivel_agua > 1.5 or chuva > 25:
        risco = "alto"
    elif nivel_agua > 0.85 or chuva > 15:
        risco = "moderado"

    return risco

