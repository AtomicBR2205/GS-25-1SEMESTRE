import random
import time


def simulate_sensor_data():
    # Valores típicos para sensores ambientais
    dados = {
        "Hora": time.strftime("%Y-%m-%d %H:%M:%S"),
        "Humidade": round(random.uniform(40, 95), 1),           # % UR
        "Chuva": round(random.uniform(0, 30), 2),               # mm/h
        "Temperatura": round(random.uniform(15, 35), 1),        # °C
        "Mobilidade_veiculos": random.randint(50, 500),         # veículos/h
        "Nivel_agua": round(random.uniform(0, 2), 2),           # metros
        "Vento": round(random.uniform(0, 20), 1),               # km/h
        "Pressao": round(random.uniform(990, 1025), 1),         # hPa
       
    }
    return dados
