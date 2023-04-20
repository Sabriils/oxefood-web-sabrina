import axios from "axios";
import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, FormGroup, Icon } from 'semantic-ui-react';

class FormProduto extends React.Component{
state = {
	codigo: null,
	titulo: null,
	descricao: null,
	valorUnitario: null,
	tempoEntregaMinimo: null,
	tempoEntregaMaximo: null
}
	
salvar = () => {

	let produtoRequest = {

		nome: this.state.nome,
		cpf: this.state.cpf,
		dataNascimento: this.state.dataNascimento,
		foneCelular: this.state.foneCelular,
		foneFixo: this.state.foneFixo
	}

	axios.post("http://localhost:8082/api/produto", produtoRequest)
	.then((response) => {
		console.log('Produto cadastrado com sucesso.')
	})
	.catch((error) => {
		console.log('Erro ao incluir o um Produto.')
	})
}

	state = {
		codigo: null,
		titulo: null,
		descricao: null,
		valorUnitario: null,
		tempoEntregaMinimo: null,
		tempoEntregaMaximo: null
		
	}
	salvar = () => {

		let produtoRequest = {

			codigo: this.state.codigo,
			titulo: this.state.titulo,
			descricao: this.state.descricao,
			valorUnitario: this.state.valorUnitario,
			tempoEntregaMinimo: this.state.tempoEntregaMinimo,
			tempoEntregaMaximo: this.state.tempoEntregaMaximo
		}
	
		axios.post("http://localhost:8082/api/produto", produtoRequest)
		.then((response) => {
			console.log('Produto cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o um produto.')
		})
	}
    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Título'
										maxLength="100"
                                        placeholder="Informe o título do produto"
										value={this.state.titulo}
										onChange={e => this.setState({titulo: e.target.value})}
									/>

									<Form.Input
                                        required
										fluid
										label='Código do produto'>
										<InputMask 
<<<<<<< HEAD
										mask="1234-4444"
=======
										mask="AAAAA-0000"
>>>>>>> 3e50bfae0ab7a30a22e2c6a56f4957dc934dc6aa
										value={this.state.codigo}
										onChange={e => this.setState({codigo: e.target.value})}/> 
									</Form.Input>

								</Form.Group>
								
                                <FormGroup>


<<<<<<< HEAD
										<Form.TextArea width="16" 
										label='Descrição' 
										placeholder='informe a descrição do produto' 
										value={this.state.descricao}
										onChange={e => this.setState({descricao: e.target.value})}/>
=======
										<Form.TextArea width="16"
										label='Descrição' 
										placeholder='informe a descrição do produto'
										value={this.state.descricao}
										onChange={e => this.setState({descricao: e.target.value})} />
>>>>>>> 3e50bfae0ab7a30a22e2c6a56f4957dc934dc6aa
									
                                </FormGroup>
								<Form.Group>
                            
                                    
									<Form.Input
                                        required
										fluid
										label='Valor unitário'
<<<<<<< HEAD
                                        width={6}>
										<InputMask 
										mask="99.99"
										value={this.state.valorUnitario}
										onChange={e => this.setState({valorUnitario: e.target.value})} /> 
=======
                                        width={6}
										value={this.state.valorUnitario}
										onChange={e => this.setState({valorUnitario: e.target.value})}>
>>>>>>> 3e50bfae0ab7a30a22e2c6a56f4957dc934dc6aa
									</Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Tempo de Entrega Mínimo em Minutos'
                                        width={6}
<<<<<<< HEAD
                                    >
                                        <InputMask 
                                            mask="99" 
                                            maskChar={null}
                                            placeholder="Ex: 30"
											value={this.state.tempoEntregaMinimo}
											onChange={e => this.setState({tempoEntregaMinimo: e.target.value})}
                                        /> 
=======
                        
                                            maskChar={null}
                                            placeholder="Ex: 30"
											value={this.state.tempoEntregaMinimo}
										onChange={e => this.setState({tempoEntregaMinimo: e.target.value})}
                                        > 
>>>>>>> 3e50bfae0ab7a30a22e2c6a56f4957dc934dc6aa
                                    </Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Tempo de Entrega Máximo em Minutos'
<<<<<<< HEAD
                                        width={6}
                                    >
                                        <InputMask 
                                            mask="99" 
=======
                                       width={6}
                                    
                                       
>>>>>>> 3e50bfae0ab7a30a22e2c6a56f4957dc934dc6aa
                                            maskChar={null}
                                            placeholder="Ex: 40"
											value={this.state.tempoEntregaMaximo}
										onChange={e => this.setState({tempoEntregaMaximo: e.target.value})}
<<<<<<< HEAD
                                        /> 
=======
                                        > 
>>>>>>> 3e50bfae0ab7a30a22e2c6a56f4957dc934dc6aa
                                    </Form.Input>

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

export default FormProduto;