# Documentación de Componentes - CyberDojo Landing

## 📋 Componentes Disponibles

### 1. `LandingNavBar.vue`
**Propósito**: Navegación principal fija en la parte superior

**Características**:
- Menu responsive con versión móvil
- Animación de transición en menú móvil
- Enlaces de scroll suave a secciones
- Botón CTA "Solicitar demo"

**Props**: Ninguno

**Eventos personalizables**:
```typescript
const handleDemoRequest = () => {
  // Personaliza la acción del botón demo
}
```

**Datos modificables**:
```typescript
const navLinks = [
  { label: 'Cómo funciona', href: '#solucion' },
  // Agrega más enlaces aquí
]
```

---

### 2. `LandingHeroSection.vue`
**Propósito**: Sección principal con video de fondo y CTAs

**Características**:
- Video background con overlay
- Grid animado de fondo
- Badge animado "En fase piloto"
- Dos botones CTA responsivos

**Assets requeridos**:
- `/public/video.mp4` - Video de fondo

**Personalización**:
```typescript
// Cambiar texto del heading
h1: "Entrena a estudiantes para enfrentar riesgos digitales reales"

// Cambiar descripción
p: "Simulaciones seguras impulsadas por IA..."
```

---

### 3. `LandingProblemSection.vue`
**Propósito**: Mostrar los 5 riesgos digitales principales

**Datos modificables**:
```typescript
interface Risk {
  title: string
  description: string
  icon: string
  fallbackIcon: string
  iconBgClass: string
  gridClass?: string
}

const risks: Risk[] = [
  {
    title: 'Grooming',
    description: 'Detección de perfiles falsos...',
    icon: '/images/grooming-icon.png',
    fallbackIcon: 'https://via.placeholder.com/32/ff0000/ffffff?text=!',
    iconBgClass: 'bg-red-500/20 text-red-400'
  },
  // ... más riesgos
]
```

**Assets requeridos**:
- `/public/images/grooming-icon.png`
- `/public/images/phishing-icon.png`
- `/public/images/ciberacoso-icon.png`
- `/public/images/manipulacion-icon.png`
- `/public/images/decisiones-icon.png`

**Grid responsivo**:
- Mobile: 1 columna
- Tablet: 2 columnas
- Desktop: 3 columnas
- XL: 5 columnas

---

### 4. `LandingSolutionSection.vue`
**Propósito**: Explicar el proceso de 3 pasos + mockup de chat

**Características**:
- Grid 2 columnas en desktop
- Pasos numerados interactivos
- Simulación de chat realista
- Overlay de decisión animado

**Datos modificables**:
```typescript
interface Step {
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Simulación',
    description: 'El estudiante entra a un chat simulado...'
  },
  // ... más pasos
]
```

**Componentes del mockup**:
- Chat header con avatar
- Burbujas de conversación (AI y usuario)
- Overlay de decisión con 2 opciones

---

### 5. `LandingGameModesSection.vue`
**Propósito**: Mostrar los 3 modos de juego

**Características**:
- Grid de 3 columnas
- Tarjeta "featured" con estilo destacado
- Iconos Material Symbols + imágenes personalizadas
- Hover effects con elevación

**Datos modificables**:
```typescript
interface GameMode {
  title: string
  description: string
  icon: string  // Material Symbol
  image: string  // Imagen personalizada
  fallbackImage: string
  iconBgClass: string
  featured?: boolean
}

const gameModes: GameMode[] = [
  {
    title: 'Modo Historia',
    description: 'Campañas narrativas inmersivas...',
    icon: 'auto_stories',
    image: '/images/historia-icon.png',
    fallbackImage: 'https://via.placeholder.com/24/4f46e5/ffffff?text=📖',
    iconBgClass: 'bg-indigo-500/20 text-indigo-400'
  },
  // ...
]
```

**Assets requeridos**:
- `/public/images/historia-icon.png`
- `/public/images/simulaciones-icon.png`
- `/public/images/creditos-icon.png`

---

### 6. `LandingTargetAudienceSection.vue`
**Propósito**: Mostrar el público objetivo (4 segmentos)

**Características**:
- Grid de 4 columnas
- Iconos Material Symbols
- Hover con scale effect
- Completamente responsive

**Datos modificables**:
```typescript
interface Audience {
  title: string
  description: string
  icon: string  // Material Symbol name
  iconBgClass: string
}

const audiences: Audience[] = [
  {
    title: 'Colegios',
    description: 'Integra CyberDojo en tus clases...',
    icon: 'school',
    iconBgClass: 'bg-blue-500/20 text-blue-400'
  },
  // ... más segmentos
]
```

**Grid responsivo**:
- Mobile: 1 columna
- Tablet: 2 columnas
- Desktop: 4 columnas

---

### 7. `LandingPricingSection.vue`
**Propósito**: Mostrar 3 planes de contacto/pricing

**Características**:
- Grid de 3 columnas
- Plan "featured" con badge y estilos destacados
- Listas de features con checkmarks
- CTAs personalizables

**Datos modificables**:
```typescript
interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  featured?: boolean
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Prueba Gratis',
    price: 'Acceso Demo',
    description: 'Experimenta un escenario completo.',
    features: [
      'Acceso inmediato',
      '1 Escenario completo',
      'Sin datos requeridos'
    ],
    cta: 'Probar Demo'
  },
  // ... más planes
]
```

**Eventos personalizables**:
```typescript
const handlePlanClick = (ctaText: string) => {
  console.log(`Plan clicked: ${ctaText}`)
  // Implementa tu lógica aquí (modal, redirect, etc.)
}
```

---

### 8. `LandingFinalCTA.vue`
**Propósito**: Última llamada a la acción antes del footer

**Características**:
- Fondo con efecto primary/10
- 3 botones con diferentes variantes
- Completamente responsive

**Datos modificables**:
```typescript
interface CTA {
  text: string
  variant: 'primary' | 'secondary' | 'outline'
  action: string
}

const ctas: CTA[] = [
  {
    text: 'Agendar Demo',
    variant: 'primary',
    action: 'schedule-demo'
  },
  // ... más CTAs
]
```

**Eventos personalizables**:
```typescript
const handleCTAClick = (action: string) => {
  console.log(`CTA clicked: ${action}`)
  // Implementa tu lógica
}
```

---

### 9. `LandingFooter.vue`
**Propósito**: Pie de página con logo, links y copyright

**Características**:
- Layout flex responsivo
- Año dinámico (computed)
- Links de navegación

**Datos modificables**:
```typescript
interface FooterLink {
  text: string
  href: string
}

const footerLinks: FooterLink[] = [
  { text: 'Privacidad', href: '#' },
  { text: 'Términos', href: '#' },
  { text: 'Contacto', href: '#' }
]
```

---

## 🎨 Clases CSS Personalizadas

Definidas en `app/assets/css/main.css`:

### `.glass-card`
Efecto glassmorphism para tarjetas
```css
.glass-card {
  @apply bg-white/[0.03] backdrop-blur-xl border border-white/[0.08];
}
```

### `.chat-bubble-user`
Burbuja de chat para mensajes del usuario
```css
.chat-bubble-user {
  @apply bg-primary text-white rounded-[18px] rounded-br-none;
}
```

### `.chat-bubble-ai`
Burbuja de chat para mensajes de la IA
```css
.chat-bubble-ai {
  @apply bg-white/10 text-white rounded-[18px] rounded-bl-none border border-white/10;
}
```

---

## 🔧 Personalización Avanzada

### Cambiar colores globales
Edita `tailwind.config.ts`:
```typescript
colors: {
  primary: "#ee6c2b",
  "primary-hover": "#d55b1f",
  // ... tus colores
}
```

### Agregar nuevas secciones
1. Crea componente en `app/components/landing/MiSeccion.vue`
2. Importa en `app/pages/index.vue`:
```vue
<LandingMiSeccion />
```

### Modificar animaciones
Las transiciones usan clases de Tailwind:
- `transition-all`
- `duration-300`
- `ease-in-out`
- `hover:scale-105`

### SEO
Edita meta tags en `app/pages/index.vue`:
```typescript
useHead({
  title: 'Tu título',
  meta: [
    { name: 'description', content: 'Tu descripción' }
  ]
})
```

---

## 📱 Testing Responsivo

Breakpoints a probar:
- Mobile: 375px, 414px, 428px
- Tablet: 768px, 820px, 1024px
- Desktop: 1280px, 1440px, 1920px

Usa Chrome DevTools o Firefox Responsive Design Mode.

---

## ⚡ Performance Tips

1. **Lazy loading de imágenes**: Ya implementado con `loading="lazy"` implícito
2. **Video optimizado**: Usa formato MP4 H.264, max 1080p
3. **Reduce motion**: Considera añadir `prefers-reduced-motion` para accesibilidad

---

## 🎯 Próximos Pasos

1. Conectar botones CTA a formularios reales
2. Implementar analytics (Google Analytics, Plausible, etc.)
3. Agregar animaciones scroll-triggered con Intersection Observer
4. Implementar modal de demo request
5. Añadir validación de formularios

---

¿Preguntas? Revisa la documentación de [Nuxt 4](https://nuxt.com) y [Tailwind CSS](https://tailwindcss.com).
