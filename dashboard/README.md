
## Abarca Toda la pantalla vertical mente

    height: 100vh; 

## React
como configure react CDN Links se debe incluir el de babel sino no funca

    <script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

para agregar un compenente de esa forma de clase 
    <script type="text/babel" src="BodyDerecho.js"></script>

### Componente de funcion
    en tramite

El codigo para renderizar los componente, se debe esta declara los compoenete de clase primero para luego ser renderidazos:

    <script type="text/babel" >
        ReactDOM.render(
            <React.StrictMode>
            <Welcome key='4' titulo="Menu" />
            <LadoDerecho key='1' titulo="Menu" />
            </React.StrictMode>,
            document.querySelector('.rt'))
    </script>