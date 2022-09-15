import '../stylesheets/Testimonio.css';

function Testimonio (props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${props.nombre}`}/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> de {props.pais}</p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong></p>
          <p dangerouslySetInnerHTML={{ __html: props.testimonio }} />
      </div>
    </div>
  );
}


export default Testimonio;
