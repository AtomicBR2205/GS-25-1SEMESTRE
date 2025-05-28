from sensores.simulacaosensores import simulate_sensor_data
from sensores.calcularrisco import calcular_risco_inundacao

def verificar_zona_risco(dados, risco):
    for i in dados:
        print("-----------------------")
        print(f"{i}: {dados[i]}")
    print("-----------------------")   
    print("Verificando zona de risco de inundação...\n")
     
    if risco == "alto":
        print("⚠️ Você está em uma zona de ALTO risco de inundação!\n")
    elif risco == "moderado":   
        print("Atenção: Zona de risco MODERADO de inundação.\n")
    else:  
        print("Zona de risco BAIXO de inundação.\n")

if __name__ == "__main__":
    try:
        dados = simulate_sensor_data()
        risco = calcular_risco_inundacao(dados)
    except Exception as e:
        print(f"Erro ao processar os dados dos sensores: {e}")
    
    if risco == "alto" or risco == "moderado":
        verificar_zona_risco(dados, risco)
        validacaouser = input("Existe alguma incosistência nos dados? (s/n): ")
        if validacaouser == 's':
            inconsistencia = input("Por favor, informe a inconsistência: ")
            print(f"\nInconsistência reportada: {inconsistencia}")
        elif validacaouser == 'n':
            print("Nenhuma inconsistência reportada nos dados.")

        else:
            print("Monitoramento em andamento. Fique atento às atualizações.")
    
    else:
        print("Nenhum risco de inundação detectado. Você está seguro.")
    
    