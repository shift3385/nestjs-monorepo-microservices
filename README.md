# NestJS Monorepo Microservices (TCP)

Este proyecto implementa una arquitectura de microservicios utilizando el patrón **Monorepo** con NestJS, comunicándose internamente a través del protocolo **TCP**.

## DESCRIPCION DE LA TAREA
Desarrollar una aplicación de NestJS monorepositorio con tres apps mínimo que incluya una app gateway y dos del tipo que deseen.. la comunicación es por TCP. Usar los conocimientos adquiridos en las anteriores.

---

## Arquitectura del Sistema

El proyecto consta de tres aplicaciones principales ubicadas en la carpeta `apps/`:

1.  **`api-gateway` (Puerto 3000):** Actúa como el único punto de entrada para los clientes externos (HTTP). Se encarga de redirigir las peticiones a los microservicios correspondientes mediante TCP.
2.  **`auth-service` (Puerto 3001 - TCP):** Microservicio dedicado a la lógica de autenticación y verificación de estado.
3.  **`catalog-service` (Puerto 3002 - TCP):** Microservicio encargado de gestionar el catálogo de productos y servicios.

## ¿Por qué un Monorepo para 3 aplicaciones?

Hemos decidido unificar las 3 APIs en un solo repositorio por las siguientes razones técnicas:
*   **Gestión de Dependencias Unificada:** Todas las aplicaciones comparten el mismo `package.json`, lo que garantiza que las versiones de las librerías sean consistentes en todo el ecosistema.
*   **Facilidad de Mantenimiento:** Permite realizar cambios transversales (como actualizar una versión de NestJS o una configuración de ESLint) en un solo paso para todos los servicios.
*   **Interoperabilidad:** Facilita enormemente el compartir interfaces, DTOs y lógica común (en una futura carpeta `libs/`) sin necesidad de publicar paquetes privados en registros externos.

## Instalación y Ejecución

Para poner en marcha el sistema completo, siga estos pasos en terminales separadas:

### 1. Instalar dependencias
```bash
npm install
```

### 2. Levantar Microservicios (Orden recomendado)
```bash
# Terminal 1: Servicio de Autenticación
npm run start auth-service

# Terminal 2: Servicio de Catálogo
npm run start catalog-service
```

### 3. Levantar el API Gateway
```bash
# Terminal 3: Punto de entrada HTTP
npm run start api-gateway
```

## Endpoints de Prueba (Evidencia)

Una vez iniciados los servicios, puede probar la comunicación a través del Gateway:

*   **Verificar Auth Service (vía TCP):** `GET http://localhost:3000/auth-status`
*   **Obtener Catálogo (vía TCP):** `GET http://localhost:3000/products`

---
**Desarrollado para:** Tarea de Trabajo UCI
**Repositorio:** [https://github.com/shift3385/nestjs-monorepo-microservices](https://github.com/shift3385/nestjs-monorepo-microservices)
