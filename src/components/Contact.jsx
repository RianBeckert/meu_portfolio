import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        from_name: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gw9vopc', 'template_th2dp0v', e.target, 'GxInE2IHTXFQYoXmO')
            .then(
                (result) => {
                    console.log(result.text);
                    setIsEmailSent(true);
                    setFormData({
                        email: '',
                        from_name: '',
                        message: '',
                    });
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md" id="contact">
                <h2 className="mb-4 text-4xl font-bold text-center text-white">Contato</h2>
                <p className="mb-8 lg:mb-16 fonte text-center text-[#ADB7BE] sm:text-xl">
                    Estou sempre aberto para novas oportunidades de trabalho, caso esteja interessado em meu serviço basta preencher o formulário e clicar em enviar, entrarei em contato assim que possível.
                </p>
                <div className="flex items-center justify-center gap-8 mb-8">
                    <a href="mailto:rianmarlonb@gmail.com" target="_blank" className="text-white bg-[#2c2b2b] w-40 h-20 rounded-lg flex items-center justify-center group-hover:flex hover:bg-gray-600">
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/rian-marlon-beckert-0952511b6/" target="_blank" className="text-white bg-[#2c2b2b] w-40 h-20 rounded-lg flex items-center justify-center cursor-pointer group-hover:flex hover:bg-gray-600">
                        Linkedin
                    </a>
                </div>
                <form onSubmit={sendEmail} className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                            Seu Email
                        </label>
                        <input type="email" name="email" className="border-2 text-sm rounded-lg block w-full p-2.5 bg-[#2c2b2b] border-gray-600 placeholder-[#ADB7BE] text-white" placeholder="nome@email.com" required />
                    </div>
                    <div>
                        <label htmlFor="from_name" className="block mb-2 text-sm font-medium text-white">
                            Seu nome
                        </label>
                        <input type="text" name="from_name" className="block p-3 w-full text-sm rounded-lg border-2 shadow-sm focus bg-[#2c2b2b] border-gray-600 placeholder-[#ADB7BE] text-white" placeholder="Seu nome ou da empresa" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                            Mensagem
                        </label>
                        <textarea name="message" rows="6" className="block p-2.5 w-full text-sm rounded-lg shadow-sm border-2 focus bg-[#2c2b2b] border-gray-600 placeholder-[#ADB7BE] text-white" placeholder="Escreva alguma mensagem . . ."></textarea>
                    </div>
                    <div className="flex items-center justify-center flex-col">
    <button type="submit" className="w-48 h-16 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-800 text-white hover:bg-gradient-to-br hover:from-purple-500 hover:via-blue-500 hover:to-blue-800">
        Enviar
    </button>
    {isEmailSent ? (
        <div className="bg-green-500 text-white p-1 mb-1 rounded mt-2">
            <span>Email enviado com sucesso!</span>
        </div>
    ) : null}
</div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
