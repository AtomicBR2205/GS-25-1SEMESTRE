import random
import time


def simulate_sensor_data():
    # Valores típicos para sensores ambientais
    data = {
        "humidade": round(random.uniform(40, 95), 1),           # % UR
        "chuva": round(random.uniform(0, 30), 2),               # mm/h
        "temperatura": round(random.uniform(15, 35), 1),        # °C
        "mobilidade_veiculos": random.randint(50, 500),         # veículos/h
        "nivel_agua": round(random.uniform(0, 2), 2),           # metros
        "vento": round(random.uniform(0, 20), 1),               # km/h
        "pressao": round(random.uniform(990, 1025), 1),         # hPa
        "hora": time.strftime("%Y-%m-%d %H:%M:%S")
    }
    return data
