import { Button, Contact, Form } from './style'

const ContactUs = () => {
  return (
    <Contact className="container">
      <h2>Fale Conosco</h2>
      <p>
        Possui uma crítica, sugestão, pergunta ou problema? Preencha o
        formulário abaixo:
      </p>
      <Form>
        <label htmlFor="">Nome e Sobrenome</label>
        <input type="text" name="" id="" />
        <div className="infos_pessoais">
          <div>
            <label htmlFor="">Email</label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Telefone (opcional)</label>
            <input type="text" name="" id="" />
          </div>
        </div>
        <label htmlFor="">Sua Mensagem</label>
        <textarea name="" id="" />
      </Form>
      <Button>Enviar</Button>
    </Contact>
  )
}

export default ContactUs
