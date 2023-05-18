import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';

class ListCupomDesconto extends React.Component{

   state = {

       listaCupomDesconto: []
      
   }

   componentDidMount = () => {
      
       this.carregarLista();
      
   }

   carregarLista = () => {

    axios.get("http://localhost:8082/api/cupomDesconto")
    .then((response) => {
       
        this.setState({
            listaCupomDesconto: response.data
        })
    })

};

formatarData = (dataParam) => {

     if (dataParam == null || dataParam == '') {
         return ''
     }
     
     let dia = dataParam.substr(8,2);
     let mes = dataParam.substr(5,2);
     let ano = dataParam.substr(0,4);
     let dataFormatada = dia + '/' + mes + '/' + ano;

     return dataFormatada
 };
 render(){
    return(
        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> Cupom De Desconto </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Button
                            inverted
                            circular
                            icon
                            labelPosition='left'
                            color='orange'
                            floated='right'
                        >
                            <Icon name='clipboard outline' />
                            <Link to={'/form-cupomDesconto'}>Novo</Link>
                        </Button>
                     
                        <br/><br/><br/>
                      
                      <Table color='orange' sortable celled>

                          <Table.Header>
                              <Table.Row>
                                  <Table.HeaderCell>Código</Table.HeaderCell>
                                  <Table.HeaderCell>Percentual Desconto</Table.HeaderCell>
                                  <Table.HeaderCell>Valor Desconto</Table.HeaderCell>
                                  <Table.HeaderCell>Valor Minimo Pedido Permitido</Table.HeaderCell>
                                  <Table.HeaderCell>Quantidade Maxima Uso</Table.HeaderCell>
                                  <Table.HeaderCell>Inicio Vigencia</Table.HeaderCell>
                                  <Table.HeaderCell>Fim Vigencia</Table.HeaderCell>
                                  <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                              </Table.Row>
                          </Table.Header>
                     
                          <Table.Body>

                              { this.state.listaCupomDesconto.map(cupomdesconto => (

                                  <Table.Row>
                                      <Table.Cell>{cupomdesconto.codigoDesconto}</Table.Cell>
                                      <Table.Cell>{cupomdesconto.percentualDesconto}</Table.Cell>
                                      <Table.Cell>{cupomdesconto.valorDesconto}</Table.Cell>
                                      <Table.Cell>{cupomdesconto.valorMinimoPedidoPermitido}</Table.Cell>
                                      <Table.Cell>{cupomdesconto.quantidadeMaximaUso}</Table.Cell>
                                      <Table.Cell>{this.formatarData(cupomdesconto.inicioVigencia)}</Table.Cell>
                                      <Table.Cell>{this.formatarData(cupomdesconto.fimVigencia)}</Table.Cell>

                                      <Table.Cell textAlign='center'>
                                         
                                          <Button
                                              inverted
                                              circular
                                              icon='edit'
                                              color='blue'
                                              itle='Clique aqui para editar os dados deste cupom' /> &nbsp;
                <Button
                                                   inverted
                                                   circular
                                                   icon='trash'
                                                   color='red'
                                                   title='Clique aqui para remover este cupom' />

                                           </Table.Cell>
                                       </Table.Row>
                                   ))}

                               </Table.Body>
                           </Table>
                       </div>
                   </Container>
               </div>
           </div>
       )
   }
}

export default ListCupomDesconto;
