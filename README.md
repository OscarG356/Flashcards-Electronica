# ⚡ Flashcards Electrónica

Una aplicación web interactiva para estudiar conceptos fundamentales de electrónica mediante tarjetas de estudio (flashcards).

## 🚀 Características

- **Tarjetas Interactivas**: Haz clic para voltear las tarjetas y ver las respuestas
- **Filtros por Categoría**: Organiza el estudio por temas específicos
- **Seguimiento de Progreso**: Marca tarjetas como dominadas y ve tu progreso
- **Modo Oscuro Automático**: Se adapta a las preferencias del sistema
- **Diseño Responsive**: Funciona perfecto en móviles, tablets y escritorio
- **Exportación de Progreso**: Descarga tu progreso en formato JSON
- **Persistencia Local**: Tu progreso se guarda automáticamente
- **Animaciones Suaves**: Transiciones fluidas con Framer Motion

## 📚 Temas Incluidos

- **Leyes**: Ley de Ohm y aplicaciones
- **Circuitos**: Serie, paralelo y análisis básico
- **Resistencias**: Código de colores y cálculos
- **Componentes**: Diodos, transistores, capacitores, inductores
- **Teoremas**: Thevenin y Norton
- **Potencia**: AC/DC y factor de potencia
- **AC**: Impedancia y conceptos de corriente alterna

## 🛠️ Instalación y Uso

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación Local

1. **Clona o descarga el proyecto**
   ```bash
   git clone https://github.com/tu-usuario/flashcards-electronica.git
   cd flashcards-electronica
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta en modo desarrollo**
   ```bash
   npm start
   ```
   La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

4. **Construir para producción**
   ```bash
   npm run build
   ```

### 🚀 Deploy en GitHub Pages

1. **Actualiza el homepage en package.json**
   ```json
   "homepage": "https://TU-USUARIO.github.io/flashcards-electronica"
   ```

2. **Haz el deploy**
   ```bash
   npm run deploy
   ```

3. **Configura GitHub Pages**
   - Ve a la configuración de tu repositorio en GitHub
   - En "Pages", selecciona la rama `gh-pages` como fuente
   - Tu aplicación estará disponible en la URL configurada

## 🎯 Cómo Usar

1. **Estudiar**: Haz clic en cualquier tarjeta para ver la respuesta
2. **Filtrar**: Usa los botones de categoría para estudiar temas específicos
3. **Marcar Progreso**: Haz clic en ☐ para marcar una tarjeta como dominada ✅
4. **Ver Progreso**: La barra muestra cuántas tarjetas has visto y dominado
5. **Exportar**: Usa el botón "📤 Exportar progreso" para descargar tu historial
6. **Resetear**: Si necesitas empezar de nuevo, usa "🔄 Resetear progreso"

## 🎨 Tecnologías Utilizadas

- **React 19**: Framework principal
- **TailwindCSS**: Estilos y diseño responsive
- **Framer Motion**: Animaciones fluidas
- **LocalStorage**: Persistencia de datos
- **GitHub Pages**: Deploy gratuito

## 📱 Responsive Design

- **Móvil**: 1 columna
- **Tablet**: 2 columnas  
- **Escritorio**: 3-4 columnas
- **Modo Oscuro**: Automático según preferencias del sistema

## 📊 Gestión de Datos

Los datos se almacenan localmente usando `localStorage`:
- Progreso de tarjetas vistas
- Tarjetas marcadas como dominadas
- Persistencia entre sesiones

## 🔧 Personalización

### Agregar Nuevas Tarjetas

Edita `src/data/flashcards.js`:

```javascript
{
  id: 25, // ID único
  pregunta: "Tu pregunta aquí",
  respuesta: "Tu respuesta aquí", 
  categoria: "Categoría" // Debe existir en el array categories
}
```

### Nuevas Categorías

Agrega la categoría en `src/data/flashcards.js`:

```javascript
export const categories = [
  "Todas",
  "Leyes", 
  "Circuitos",
  // ... categorías existentes
  "Tu Nueva Categoría"
];
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## ✨ Créditos

Creado con ❤️ para estudiantes de electrónica e ingeniería.

---

**¡Feliz estudio! ⚡📚**

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
