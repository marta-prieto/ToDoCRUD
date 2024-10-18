const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            tel: e.target.tel.value,
        };

        // localStorage
        localStorage.setItem('formData', JSON.stringify(formData));
        e.target.reset();
    };



    return (
        <section className="section form__container">
            <p>Mis datos</p>
            <form onSubmit={handleSubmit} method="POST">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" required placeholder="Nombre" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="Email" />

                <label htmlFor="tel">Teléfono</label>
                <input type="tel" id="tel" name="tel" required pattern="[0-9]{9}" title="Debe ingresar 9 dígitos" placeholder="Teléfono" />

                <button type="submit">Guardar</button>
            </form>
        </section>
    );
};

export default Form;
