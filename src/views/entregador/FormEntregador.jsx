import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon, Radio, Select } from 'semantic-ui-react';


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


export default function FormEntregador() {

	const { state } = useLocation();
	const [idEntregador, setIdEntregador] = useState();
	const [nome, setNome] = useState();	
	const [cpf, setCpf] = useState();
	const [rg, setRg] = useState();
	const [dataNascimento, setDataNascimento] = useState();
	const [foneCelular, setFoneCelular] = useState();
	const [foneFixo, setFoneFixo] = useState();
	const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
	const [valorFrete, setValorFrete] = useState();
	const [enderecoRua, setEnderecoRua]	= useState();
	const [enderecoNumero, setEnderecoNumero] = useState();
	const [enderecoBairro, setEnderecoBairro] = useState();
	const [enderecoCidade, setEnderecoCidade] = useState();
	const [enderecoCep, setEnderecoCep]	= useState();
	const [enderecoUf, setEnderecoUf]= useState();
	const [enderecoComplemento, setEnderecoComplemento]	= useState();
	const [ativo, setAtivo]	= useState();


	useEffect(() => {
		if (state != null && state.id != null) {
			axios.get("http://localhost:8082/api/entregador/" + state.id)
				 .then((response) => {
						   setIdEntregador(response.data.id)
						   setNome(response.data.nome)
						   setCpf(response.data.cpf)
						   setRg(response.data.rg)
						   setDataNascimento(response.data.dataNascimento)
						   setFoneCelular(response.data.foneCelular)
						   setFoneFixo(response.data.foneFixo)
						   setQtdEntregasRealizadas(response.data.qtdEntregasRealizadas)
						   setValorFrete(response.data.valorFrete)
						   setEnderecoRua(response.data.enderecoRua)
						   setEnderecoNumero(response.data.enderecoNumero)
						   setEnderecoBairro(response.data.enderecoBairro)
						   setEnderecoCidade(response.data.enderecoCidade)
						   setEnderecoCep(response.data.enderecoCep)
						   setEnderecoUf(response.data.enderecoUf)
						   setEnderecoComplemento(response.data.enderecoComplemento)
						   setAtivo(response.data.ativo)

			})
		}
	}, [state])
	


	function salvar () {

		let entregadorRequest = {

			nome: nome,
			cpf: cpf,
			rg: rg,
			dataNascimento: dataNascimento,
			foneCelular: foneCelular,
			foneFixo: foneFixo,
			qtdEntregasRealizadas: qtdEntregasRealizadas,
			valorFrete: valorFrete,
			enderecoRua: enderecoRua,
			enderecoNumero: enderecoNumero,
			enderecoBairro: enderecoBairro,
			enderecoCidade: enderecoCidade,
			enderecoCep: enderecoCep,
			enderecoUf: enderecoUf,
			enderecoComplemento: enderecoComplemento,
			ativo: true
		}
	
		if (idEntregador != null) { //Alteração:
			axios.put("http://localhost:8082/api/entregador/" + idEntregador, entregadorRequest)
			.then((response) => { console.log('Entregador alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alter um entregador.') })
		} else { //Cadastro:
			axios.post("http://localhost:8082/api/entregador/", entregadorRequest)
			.then((response) => { console.log('Entregador cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o entregador.') })
		}
 
	}

	


        return(
            <div>

                <div style={{marginTop: '3%'}}>
				<Container textAlign='justified' >

					{ idEntregador === undefined &&
					<h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
					}
					{ idEntregador != undefined &&
					<h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
					}

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
										value={nome}
										onChange={e => setNome(e.target.value)}
									/>

									<Form.Input
                                        required
										fluid
                                        width={5}
										label='CPF'>
										<InputMask 
										mask="999.999.999-99"
										value={cpf}
										onChange={e => setCpf(e.target.value)}/> 
									</Form.Input>

                                    <Form.Input
										fluid
                                        width={5}
										label='RG'>
										<InputMask 
										mask="99.999.999-9" 
										value={rg}
										onChange={e => setRg(e.target.value)}/>
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
											value={dataNascimento}
											onChange={e => setDataNascimento(e.target.value)}
                                        /> 
                                    </Form.Input>

									<Form.Input
                                        required
										fluid
										label='Fone Celular'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" 
										value={foneCelular}
										onChange={e => setFoneCelular(e.target.value)}/> 
									</Form.Input>

                                    <Form.Input
										fluid
										label='Fone Fixo'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" value={foneFixo}
										onChange={e =>setFoneFixo(e.target.value)}/> 



									</Form.Input>

                                    <Form.Input
										fluid
										label='QTD Entregas Realizadas'
                                        width={6}
										value={qtdEntregasRealizadas}
										onChange={e =>this.setQtdEntregasRealizadas(e.target.value)}>
									</Form.Input>

									<Form.Input
										fluid
										label='Valor Por Frete'
                                        width={6}>
										<InputMask
										mask="99.99"
										value={valorFrete}
										onChange={e => setValorFrete( e.target.value)}/> 
									</Form.Input>

								</Form.Group>

                                <Form.Group >

									<Form.Input
										fluid
                                        width={11}
										label='Rua'
										maxLength="100"
										value={enderecoRua}
										onChange={e => setEnderecoRua(e.target.value)}
									/>

									<Form.Input
										fluid
										label='Número'
                                        width={6}
										value={enderecoNumero}
										onChange={e => setEnderecoNumero(e.target.value)}> 
									</Form.Input>

								</Form.Group>

                                <Form.Group >

									<Form.Input
										fluid
                                        width={11}
										label='Bairro'
										maxLength="100"
										value={enderecoBairro}
										onChange={e => setEnderecoBairro( e.target.value)}

									/>

                                    <Form.Input
										fluid
                                        width={11}
										label='Cidade'
										maxLength="100"
										value={enderecoCidade}
										onChange={e => setEnderecoCidade( e.target.value)}

									/>

									<Form.Input
										fluid
										label='CEP'
                                        width={6}> 
                                        <InputMask 
										mask="99999-999"
										value={enderecoCep}
										onChange={e => setEnderecoCep(e.target.value)}/> 
									</Form.Input>

								</Form.Group>



								<Form.Group>
										<Form.Field
										control={Select}
										label='UF'
										width={16}
										options={options}
										placeholder='selecione'
										value={enderecoUf}
										onChange={(e , {value}) =>  setEnderecoUf({enderecoUf: value})}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Input
										fluid
										label='Complemento'
                                        width={16}
										value={enderecoComplemento}
										onChange={e => setEnderecoComplemento(e.target.value)}>
									</Form.Input>
								</Form.Group>
								<Form.Group inline>
									<label>Ativo: </label>
										<Form.Radio
											control={Radio}
											label='Sim'
											checked={ativo}
											value={ativo}
										onChange={e => setAtivo(true)}
										/>
										<Form.Radio
											control={Radio}
											label='Não'
											checked={!ativo}
											value={ativo}
											onChange={e => setAtivo(false)}
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
										
										>
										<Icon name='reply' />
										<Link to='/list-entregador'>Voltar</Link>
									</Button>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={ () => salvar () }
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