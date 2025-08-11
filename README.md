# SkyConnect Explorer

Una aplicación Nuxt 4 para explorar aeropuertos del mundo con información detallada, búsqueda avanzada y visualización en mapas.

## 🚀 Características

- **Búsqueda de Aeropuertos**: Búsqueda por nombre, ciudad o código IATA/ICAO
- **Información Detallada**: Datos completos de cada aeropuerto
- **Visualización en Mapas**: Integración con Leaflet para mapas interactivos
- **Modo Oscuro**: Soporte para tema claro y oscuro
- **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop
- **Historial de Búsquedas**: Guarda las búsquedas recientes
- **Paginación**: Navegación eficiente a través de resultados

## 🛠️ Tecnologías

- **Nuxt 4** - Framework de Vue.js para aplicaciones universales
- **Vue 3** - Framework progresivo de JavaScript
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework CSS utilitario
- **Pinia** - Gestión de estado para Vue
- **VueUse** - Colección de composables útiles
- **Leaflet** - Biblioteca de mapas interactivos

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd test-project
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   # Crear archivo .env
   NUXT_PUBLIC_API_BASE_URL=https://api.example.com
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Construir para producción**
   ```bash
   npm run build
   npm run preview
   ```

## 🏗️ Estructura del Proyecto

```
test-project/
├── app/                    # Configuración principal de la app
├── assets/                 # Recursos estáticos (CSS, fuentes)
│   └── css/
│       └── main.css       # Estilos principales con Tailwind
├── components/             # Componentes Vue reutilizables
│   ├── AirportCard.vue    # Tarjeta de información del aeropuerto
│   ├── AirportList.vue    # Lista de aeropuertos
│   ├── SearchInput.vue    # Input de búsqueda
│   ├── Pagination.vue     # Componente de paginación
│   ├── LoadingView.vue    # Vista de carga
│   └── ErrorView.vue      # Vista de error
├── composables/            # Composables Vue (lógica reutilizable)
│   ├── useAirports.ts     # Gestión de datos de aeropuertos
│   ├── useAirportSearch.ts # Lógica de búsqueda
│   ├── useDarkMode.ts     # Gestión del modo oscuro
│   ├── useLocalTime.ts    # Cálculos de tiempo local
│   └── useAirportDetails.ts # Detalles del aeropuerto
├── constants/              # Constantes de la aplicación
│   └── index.ts           # Configuración global
├── pages/                  # Páginas de la aplicación
│   └── index.vue          # Página principal
├── services/               # Servicios de API
│   └── aviationService.ts # Servicio de aeronáutica
├── store/                  # Estado global con Pinia
│   └── airportStore.ts    # Store de aeropuertos
├── types/                  # Definiciones de TypeScript
│   └── index.d.ts         # Interfaces y tipos
├── public/                 # Archivos públicos
│   └── images/            # Imágenes estáticas
├── nuxt.config.ts         # Configuración de Nuxt
├── tailwind.config.ts     # Configuración de Tailwind CSS
└── package.json           # Dependencias del proyecto
```

## 🔧 Configuración

### Nuxt Configuration
El archivo `nuxt.config.ts` incluye:
- Módulos: Tailwind CSS, Pinia, VueUse
- Configuración de Tailwind con tema personalizado
- Configuración de runtime para variables de entorno
- Soporte para Leaflet y transpilación

### Tailwind CSS
Configuración personalizada con:
- Colores de marca personalizados
- Fuente Gotham Black
- Imagen de fondo del aeropuerto
- Modo oscuro con clase CSS

### TypeScript
Configuración estricta con:
- Tipos estrictos habilitados
- Verificación de tipos de bibliotecas deshabilitada
- Soporte para tipos de Node.js

## 📱 Uso

### Búsqueda de Aeropuertos
1. Escribe en el campo de búsqueda (nombre, ciudad o código)
2. Presiona Enter o haz clic en "Buscar"
3. Los resultados se muestran en tarjetas organizadas
4. Usa la paginación para navegar por más resultados

### Ver Detalles
1. Haz clic en "Ver Detalles" en cualquier tarjeta
2. Se abre la vista detallada del aeropuerto
3. Navega entre las pestañas: Overview, Details, Map, Weather

### Ver en Mapa
1. Haz clic en el botón de mapa en cualquier tarjeta
2. Se abre la vista de mapa con la ubicación del aeropuerto
3. Interactúa con el mapa usando los controles de Leaflet

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    blue: "#006AFF",
    cyan: "#00F9FF",
  }
}
```

### Fuentes
La fuente Gotham se puede cambiar en `assets/css/main.css`:
```css
@font-face {
  font-family: 'Gotham Black';
  src: url('/fonts/your-font.otf') format('opentype');
}
```

### Tema
El modo oscuro se puede personalizar en `constants/index.ts`:
```typescript
THEME_CONFIG: {
  dark: {
    primary: '#your-color',
    background: '#your-bg-color'
  }
}
```

## 🧪 Testing

```bash
# Ejecutar tests
npm run test

# Tests con UI
npm run test:ui

# Tests con cobertura
npm run test:coverage
```

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run generate` - Generación estática
- `npm run preview` - Vista previa de producción
- `npm run lint` - Verificación de código
- `npm run lint:fix` - Corrección automática de linting

## 🌐 Despliegue

### Vercel
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Despliega automáticamente

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run generate`
3. Configura el directorio de salida: `.output/public`

### Servidor Tradicional
1. Ejecuta `npm run build`
2. Copia el contenido de `.output/public` a tu servidor
3. Configura el servidor para SPA routing

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes problemas o preguntas:
- Abre un issue en GitHub
- Revisa la documentación de Nuxt 4
- Consulta la documentación de Vue 3
- Revisa la documentación de Tailwind CSS

## 🔄 Actualizaciones

Para mantener el proyecto actualizado:
```bash
# Actualizar dependencias
npm update

# Verificar dependencias obsoletas
npm outdated

# Actualizar a las últimas versiones
npm audit fix
```

---

**Desarrollado con ❤️ usando Nuxt 4, Vue 3 y Tailwind CSS**
