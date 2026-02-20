# 🚀 Guía de Inicio Rápido - CyberDojo Landing Page

## ✅ Estructura Creada

```
cyberdojo-landingpage/
├── app/
│   ├── components/
│   │   └── landing/
│   │       ├── NavBar.vue ✅
│   │       ├── HeroSection.vue ✅
│   │       ├── ProblemSection.vue ✅
│   │       ├── SolutionSection.vue ✅
│   │       ├── GameModesSection.vue ✅
│   │       ├── TargetAudienceSection.vue ✅
│   │       ├── PricingSection.vue ✅
│   │       ├── FinalCTA.vue ✅
│   │       └── Footer.vue ✅
│   ├── pages/
│   │   └── index.vue ✅
│   ├── assets/
│   │   └── css/
│   │       └── main.css ✅
│   └── app.vue ✅
├── public/
│   └── images/ ✅ (creada, lista para tus assets)
├── tailwind.config.ts ✅
├── nuxt.config.ts ✅ (actualizado)
├── COMPONENTS.md ✅ (documentación completa)
└── package.json
```

## 🎯 Próximos Pasos

### 1️⃣ Iniciar el servidor de desarrollo

```bash
cd cyberdojo-landingpage
npm run dev
```

El proyecto estará disponible en `http://localhost:3000`

### 2️⃣ Agregar tus imágenes

Coloca estos archivos en `public/images/`:
- `grooming-icon.png`
- `phishing-icon.png`
- `ciberacoso-icon.png`
- `manipulacion-icon.png`
- `decisiones-icon.png`
- `historia-icon.png`
- `simulaciones-icon.png`
- `creditos-icon.png`

Mientras no tengas las imágenes, se mostrarán placeholders automáticamente.

### 3️⃣ Agregar video (opcional)

Si quieres el video de fondo en el Hero:
- Coloca `video.mp4` en la carpeta `public/`
- Formato recomendado: MP4 H.264, máximo 1080p

### 4️⃣ Personalizar contenido

Cada componente tiene sus datos al principio del `<script setup>`:

**Ejemplo - NavBar.vue:**
```typescript
const navLinks = [
  { label: 'Cómo funciona', href: '#solucion' },
  { label: 'Modos de Juego', href: '#experiencia' },
  // Modifica aquí
]
```

**Ejemplo - PricingSection.vue:**
```typescript
const pricingPlans = [
  {
    name: 'Prueba Gratis',
    price: 'Acceso Demo',
    features: ['...'],
    // Modifica aquí
  }
]
```

## 📱 Responsividad

Todos los componentes son **100% responsivos**:
- ✅ Mobile (< 640px)
- ✅ Tablet (640px - 1024px)
- ✅ Desktop (> 1024px)

Usa Chrome DevTools (F12) para probar diferentes tamaños.

## 🎨 Personalización de Colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  primary: "#ee6c2b",        // Tu color principal
  "primary-hover": "#d55b1f", // Hover del primary
  "accent-mint": "#4ade80",   // Verde menta
  "accent-violet": "#a78bfa", // Violeta
}
```

## 🔧 Conectar Funcionalidad

Los botones tienen handlers listos para personalizar:

**Ejemplo - HeroSection.vue:**
```typescript
const handleSolicitarDemo = () => {
  // Abre modal, redirect a formulario, etc.
  console.log('Solicitar demo')
}
```

**Ejemplo - PricingSection.vue:**
```typescript
const handlePlanClick = (ctaText: string) => {
  // Lógica según el plan seleccionado
  if (ctaText === 'Solicitar validación') {
    // Abrir formulario de contacto
  }
}
```

## 🚀 Deploy a Producción

### Build
```bash
npm run build
```

### Preview local
```bash
npm run preview
```

### Deploy en Vercel (recomendado)
```bash
# Instala Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy en Netlify
1. Conecta tu repo de Git
2. Build command: `npm run build`
3. Publish directory: `.output/public`

## 📚 Documentación Completa

Lee `COMPONENTS.md` para documentación detallada de cada componente, incluyendo:
- Props y eventos
- Estructura de datos
- Personalización avanzada
- Tips de performance

## ⚠️ Notas sobre Warnings del Linter

Verás algunos warnings en `main.css` sobre `@tailwind` y `@apply`. **Estos son falsos positivos** - el proyecto funciona perfectamente porque Tailwind procesa estas directivas durante el build.

Para silenciarlos (opcional), agrega a `.vscode/settings.json`:
```json
{
  "css.lint.unknownAtRules": "ignore"
}
```

## 🎯 Checklist Final

- [ ] `npm run dev` funciona correctamente
- [ ] Todas las secciones se muestran en orden
- [ ] El menú móvil funciona (prueba en pantalla < 768px)
- [ ] Los enlaces de navegación hacen scroll a las secciones
- [ ] Las imágenes se cargan (o muestran placeholders)
- [ ] La página es responsiva en mobile/tablet/desktop

## 💡 Tips

1. **Smooth scroll**: Ya configurado automáticamente con `href="#id"`
2. **Dark mode**: Ya activo por defecto (clase `dark` en html)
3. **SEO**: Meta tags ya configurados en `pages/index.vue`
4. **Performance**: Imágenes con lazy loading automático

## 🐛 Problemas Comunes

### El servidor no inicia
```bash
# Limpia cache
rm -rf .nuxt node_modules
npm install
npm run dev
```

### Los componentes no se muestran
- Verifica que estés en `http://localhost:3000`
- Revisa la consola del navegador (F12)

### Estilos no se aplican
- Asegúrate de que `main.css` esté importado en `nuxt.config.ts` ✅ Ya está
- Limpia el cache del navegador (Ctrl + Shift + R)

---

🎉 **¡Todo listo!** Tu landing page está completamente componentizada y lista para usar.

Para soporte, revisa la documentación de:
- [Nuxt 4](https://nuxt.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vue 3](https://vuejs.org)
