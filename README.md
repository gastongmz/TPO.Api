# Portfolio 

<p align="center">
<img src="https://raw.githubusercontent.com/PhantomScript/asset-container/b26b0ebaaa13bec7fac796ee0b8296676df6ee0b/developer-portfolio/website.svg" alt="" width="450px"/>
</p>

## Crea y configura tu propio Porfolio

<br />


# Sections :bookmark:
- HOME
- SOBRE MI
- RESUMEN
    - EDUCACION
    - SKILLS
    - EXPERIENCIA <br />
- CONTACTOS
<br />
- LOGIN
- SOLICITUDES 
- USURIOS
<br /><br />

<br /> <br />

# Instalacion :arrow_down:
### Necesitas instalar git y Node

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

```
node --version
git --version
```

<br />

### Clonar el repo
```
git clone https://github.com/gastongmz/Porfolio
cd Portfolio
```
### Instalar los paquetes
```
npm install
```
### Iniciar el server
```
npm start
```
## Pagina

### Landing
<p align="center">
<img src="https://github.com/gastongmz/Porfolio/blob/main/asset/home.png" alt="" width="650px"/>
</p>

<br />

### Sobre mi
<p align="center">
<img src="https://github.com/gastongmz/Porfolio/blob/main/asset/sobremi.png" alt="" width="650px"/>
</p>

<br />


### Formacion
<p align="center">
<img src="https://github.com/gastongmz/Porfolio/blob/main/asset/formacion.png" alt="" width="650px"/>
</p>

<br />


### Skils
<p align="center">
<img src="https://github.com/gastongmz/Porfolio/blob/main/asset/skils.png" alt="" width="650px"/>
</p>

<br />

### Experiencia
<p align="center">
<img src="https://github.com/gastongmz/Porfolio/blob/main/asset/experiencia.png" alt="" width="650px"/>
</p>

<br />

### Contactar
<p align="center">
<img src="https://github.com/gastongmz/Porfolio/blob/main/asset/contactar.png" alt="" width="650px"/>
</p>

<br />

### Login
<p align="center">
<img src="https://github.com/gastongmz/Porfolio/blob/main/asset/login.png" alt="" width="650px"/>
</p>

<br />

### Solicitudes
<p align="center">
<img src="https://github.com/gastongmz/Porfolio/blob/main/asset/grilla.png" alt="" width="650px"/>
</p>

<br />

### Crear usuarios
<p align="center">
<img src="https://github.com/gastongmz/Porfolio/blob/main/asset/addusuario.png" alt="" width="650px"/>
</p>

<br />

# Estructura:

```bash
├── README.md        
├── package-lock.json
├── package.json     
├── public
├── Jenkinsfile
│   ├── _redirects   
│   ├── favicon.ico  
│   ├── favicon.png
│   ├── favicon512.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└──src
   ├── App.css
   ├── App.js
   ├── assets
   │   ├── fonts
   │   │   └── Bestermind
   │   │       └── BestermindRegular.ttf
   │   ├── pdf
   │   │   └── resume.pdf
   │   └── svg
   │       ├── about
   │       ├── contacts
   │       ├── education
   │       ├── experience
   │       ├── strenghts
   │       ├── social
   │       └── skills
   │           └── soft
   ├── components
   │   ├── About
   │   │   ├── About.css
   │   │   └── About.js
   │   ├── BackToTop
   │   │   ├── BackToTop.css
   │   │   └── BackToTop.js
   │   ├── Contacts
   │   │   ├── Contacts.css
   │   │   └── Contacts.js
   │   ├── Education
   │   │   ├── Education.css
   │   │   ├── Education.js
   │   │   └── EducationCard.js
   │   ├── Experience
   │   │   ├── Experience.css
   │   │   ├── Experience.js
   │   │   └── ExperienceCard.js
   │   ├── Footer
   │   │   ├── Footer.css
   │   │   └── Footer.js
   │   ├── Landing
   │   │   ├── Landing.css
   │   │   └── Landing.js
   │   ├── Navbar
   │   │   ├── Navbar.css
   │   │   └── Navbar.js
   │   ├── Skills
   │   │   ├── Skills.css
   │   │   └── Skills.js
   │   └── index.js
   ├── contexts
   │   └── ThemeContext.js
   ├── data
   │   ├── aboutData.js
   │   ├── contactsData.js
   │   ├── educationData.js
   │   ├── experienceData.js
   │   ├── gridData.js
   │   ├── headerData.js
   │   ├── loginData.js
   │   ├── skillsData.js
   │   ├── socialsData.js
   │   ├── strengthsData.js
   │   └── themeData.js
   ├── index.css
   ├── index.js
   ├── pages
   │   ├── Grid
   │   │   ├── GridPage.css
   │   │   └── GridPage.js
   │   ├── Main
   │   │   └── Main.js
   │   ├── Login
   │   │   ├── LoginPage.css
   │   │   └── LoginPage.js
   │   ├── Usuario - No accesible desde la pagina.
   │   │   ├── UsuarioPage.css
   │   │   └── UsuarioPage.js
   │   └── index.js
   ├── reportWebVitals.js
   ├── theme
   │   ├── images.js
   │   └── theme.js
   └── utils
       ├── ScrollToTop.js
       └── skillsImage.js

```
<br />

# Uso:
### Configuracion.

Ej:
```javascript
export const headerData = {
    name: '-- NOMBRE --',
    title: '-- TITULO --',
    desciption:'-- DESCRIPCION --',
    image: '-- IMAGEN --',
    resumePdf: ''
}

// Para importar imagenes y PDF desde archivos

import resume from '../assets/pdf/resume.pdf'
import profileImg from '../assets/png/profileImg'

export const headerData = {
    name: '-- NOMBRE --',
    title: '-- TITULO --',
    desciption:'-- DESCRIPCION --',
    image: profileImg,
    resumePdf: resume
}
```
#### Archivos de configuracion para cada componentes.
>#### Configurar el tema del sitio [`src/data/themeData.js`](https://github.com/gastongmz/Porfolio/blob/main/src/data/themeData.js) y elegi la fuete [`src/App.css`](https://github.com/gastongmz/Porfolio/blob/main/src/App.css)

> #### Sobre mi - [`src/data/aboutData.js`](https://github.com/gastongmz/Porfolio/blob/main/src/data/aboutData.js)

> #### Detalles Educacion - [`src/data/educationData.js`](https://github.com/gastongmz/Porfolio/blob/main/src/data/educationData.js) 

> #### Agregar tus Skills - [`src/data/skillsData.js`](https://github.com/gastongmz/Porfolio/blob/main/src/data/skillsData.js)

> #### Experiencia - [`src/data/experienceData.js`](https://github.com/gastongmz/Porfolio/blob/main/src/data/experienceData.js)

> #### Detalle Contacto - [`src/data/contactsData.js`](https://github.com/gastongmz/Porfolio/blob/main/src/data/contactsData.js)

> #### Perfiles redes social - [`src/data/contactsData.js`](https://github.com/gastongmz/Porfolio/blob/main/src/data/socialsData.js)


```javascript
// EXAMPLE
export const educationData = [
    {
        id: 1,
        institution: '-- NOMBRE INSTITUCION --',
        course: '-- CURSO --',
        startYear: '2017',
        endYear: '2019'
    },
    //
]
```
# Hosting :globe_with_meridians:


# SEO :spider:
### La optimización de motores de búsqueda (SEO) es el proceso de mejorar la calidad y la cantidad del tráfico del sitio web a un sitio web o una página web desde los motores de búsqueda. 
### Agregue el código a `public/index.html` con la información de su sitio. Este paso no es obligatorio.

<br />

```html
    <meta name="description" content="--- DESCRIPCION DEL SITIO ---" />
    <meta property="og:image" content="--- IMAGEN ---">
    <meta property="og:site_name" content="--- NOMBRE ---"/>
    <meta property="og:title" content="--- NOMBRE ---"/>
    <meta property="og:url" content="--- URL DEL SITIO ---"/>
    <meta property="og:type" content="website"/>
    <meta property="og:description" content="--- DESCRIPCION DEL SITIO ---"/>
    <meta property="og:locale" content="---  ---">
    <meta property="og:image" content="--- IMAGEN ---"/>
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    
    <meta itemprop="name" content="--- NOMBRE ---"/>
    <meta itemprop="url" content="--- URL DEL SITIO ---"/>
    <meta itemprop="description" content="--- DESCRIPCION DEL SITIO ---"/>
    <meta itemprop="thumbnailUrl" content=""/>
    <link rel="image_src" href="--- IMAGEN ---"/>
    <meta itemprop="image" content="--- IMAGEN ---"/>
    
    <meta name="twitter:site" content="@--- USUARIO TWITTER ---">
    <meta name="twitter:creator" content="@--- USUARIO TWITTER ---">
    <meta name="twitter:url" content="--- URL DEL SITIO ---"/>
    <meta name="twitter:title" content="--- NOMBRE ---">
    <meta name="twitter:description" content="--- DESCRIPCION SITIO ---">
    <meta name="twitter:image" content="--- IMAGEN ---">
    <meta name="twitter:card" content="summary"/>

```

<br />

# Paquetes que se usaron:

| Paquetetes  |
| :-------------: |
| @material-ui/core  |
| @material-ui/icons  |
| axios |
| react-fast-marquee |
| react-helmet  |
| react-icons  |
| react-reveal |
| react-router-dom  |
| react-router-hash-link  |
| react-slick  |
| slick-carousel |
| validator |

<br />

# APIs :world_map:
- [Backend](https://github.com/gastongmz/Backend/)


<br />

# Fuentes e Imagenes :performing_arts:

## Ilustraciones
- [Icons8](https://icons8.com/illustrations/styles)
- [SVG Porn](https://svgporn.com/)

## Iconos
- [Material Icons](https://material-ui.com/components/material-icons/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Fuentes
- [Poppins](https://fonts.google.com/specimen/Poppins)
- [Montserrat](https://fonts.google.com/specimen/Montserrat)
- [Raleway](https://fonts.google.com/specimen/Raleway)
- [Big Shoulders Text](https://fonts.google.com/specimen/Big+Shoulders+Text)
- [Bestermind](https://www.dafont.com/bestermind.font)
- [Roboto](https://fonts.google.com/specimen/Roboto)

<br />