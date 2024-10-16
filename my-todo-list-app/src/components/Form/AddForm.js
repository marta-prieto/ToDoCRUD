const Form = () => {
    return (
        <section className="section">   
        <p>Mis datos</p>
        <form action="#" method="POST">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required placeholder="Nombre"/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="Email"/>

            <label htmlFor="tel">Teléfono</label>
            <input type="tel" id="tel" name="tel" required pattern="[0-9]{9}" title="Debe ingresar 9 dígitos" placeholder="Teléfono"/>

            <button type="submit">Guardar</button>
            {/* añadir localstorage */}
        </form>
    </section>  
);
};

export default Form;
