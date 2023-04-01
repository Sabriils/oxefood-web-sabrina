import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, Select, Radio} from 'semantic-ui-react';

const options = [
	{ key: "AC", text: "Acre", value: "AC" },
  { key: "AL", text: "Alagoas", value: "AL" },
  { key: "AP", text: "Amapá", value: "AP" },
  { key: "AM", text: "Amazonas", value: "AM" },
  { key: "BA", text: "Bahia", value: "BA" },
  { key: "CE", text: "Ceará", value: "CE" },
  { key: "DF", text: "Distrito Federal", value: "DF" },
  { key: "ES", text: "Espírito Santo", value: "ES" },
  { key: "GO", text: "Goiás", value: "GO" },
  { key: "MA", text: "Maranhão", value: "MA" },
  { key: "MT", text: "Mato Grosso", value: "MT" },
  { key: "MS", text: "Mato Grosso do Sul", value: "MS" },
  { key: "MG", text: "Minas Gerais", value: "MG" },
  { key: "PA", text: "Pará", value: "PA" },
  { key: "PB", text: "Paraíba", value: "PB" },
  { key: "PR", text: "Paraná", value: "PR" },
  { key: "PE", text: "Pernambuco", value: "PE" },
  { key: "PI", text: "Piauí", value: "PI" },
  { key: "RJ", text: "Rio de Janeiro", value: "RJ" },
  { key: "RN", text: "Rio Grande do Norte", value: "RN" },
  { key: "RS", text: "Rio Grande do Sul", value: "RS" },
  { key: "RO", text: "Rondônia", value: "RO" },
  { key: "RR", text: "Roraima", value: "RR" },
  { key: "SC", text: "Santa Catarina", value: "SC" },
  { key: "SP", text: "São Paulo", value: "SP" },
  { key: "SE", text: "Sergipe", value: "SE" },
  { key: "TO", text: "Tocantins", value: "TO" },
];


class FormEntregador extends React.Component{
	state = {}

	handleChange = (e, { value }) => this.setState({ value })
    render(){
		const { value } = this.state
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group >

									<Form.Input
										required
										fluid
                                        width={11}
										label='Nome'
										maxLength="100"
									/>

									<Form.Input
                                        required
										fluid
                                        width={5}
										label='CPF'>
										<InputMask 
										mask="999.999.999-99"/> 
									</Form.Input>

                                    <Form.Input
										fluid
                                        width={5}
										label='RG'>
										<InputMask 
										mask="99.999.999-9"/> 
									</Form.Input>

								</Form.Group>
								
								<Form.Group>

                                    <Form.Input
                                        fluid
                                        label='DT Nascimento'
                                        width={6}
                                    >
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
                                        /> 
                                    </Form.Input>

									<Form.Input
                                        required
										fluid
										label='Fone Celular'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" /> 
									</Form.Input>

                                    <Form.Input
										fluid
										label='Fone Fixo'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" /> 
									</Form.Input>

                                    <Form.Input
										fluid
										label='QTD Entregas Realizadas'
                                        width={6}
                                        type="number">
									</Form.Input>

									<Form.Input
										fluid
										label='Valor Por Frete'
                                        width={6}
										type="number"> 
									</Form.Input>

								</Form.Group>

                                <Form.Group >

									<Form.Input
										fluid
                                        width={11}
										label='Rua'
										maxLength="100"
									/>

									<Form.Input
										fluid
										label='Número'
                                        width={6}
										type="number"> 
									</Form.Input>

								</Form.Group>

                                <Form.Group >

									<Form.Input
										fluid
                                        width={11}
										label='Bairro'
										maxLength="100"
									/>

                                    <Form.Input
										fluid
                                        width={11}
										label='Cidade'
										maxLength="100"
									/>

									<Form.Input
										fluid
										label='CEP'
                                        width={6}> 
                                        <InputMask 
										mask="99.999-999"/> 
									</Form.Input>

								</Form.Group>

								<Form.Group>
									<Form.Input
										fluid
										label='UF'
                                        width={16}>
									</Form.Input>
								</Form.Group>

								<Form.Group>
										<Form.Field
										control={Select}
										label='UF'
										width={16}
										options={options}
										placeholder='selecione'
									/>
								</Form.Group>
								<Form.Group>
									<Form.Input
										fluid
										label='Complemento'
                                        width={16}>
									</Form.Input>
								</Form.Group>
								<Form.Group inline>
									<label>Ativo: </label>
										<Form.Radio
											control={Radio}
											label='Sim'
											value='si'
											checked={value === 'si'}
											onChange={this.handleChange}
										/>
										<Form.Radio
											control={Radio}
											label='Não'
											value='no'
											checked={value === 'no'}
											onChange={this.handleChange}
										/>
								</Form.Group>

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
										onClick={this.listar}
										>
										<Icon name='reply' />
										Voltar
									</Button>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={this.salvar}
										>
											<Icon name='save' />
											Salvar
										</Button>
										
									</Container>

								</Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}
}

export default FormEntregador;