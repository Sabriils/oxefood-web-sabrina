import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table, Form, Menu, Segment } from 'semantic-ui-react';

class ListProduto extends React.Component{

   state = {
        openModal: false,
        idRemover: null,
        listaProdutos: [],
        menuFiltro: false,
        codigo: '',
        titulo: '',
        idCategoria: '',
        listaCategoriaProduto: []

   }

   componentDidMount = () => {
      
       this.carregarLista();
      
   }

   confirmaRemover = (id) => {

    this.setState({
        openModal: true,
        idRemover: id
         })  
    }
    setOpenModal = (val) => {

        this.setState({
            openModal: val
        })
   
    };

   remover = async () => {

    await axios.delete("http://localhost:8082/api/produto/" + this.state.idRemover)
    .then((response) => {

        this.setState({ openModal: false })
        console.log('Produto removido com sucesso.')

        axios.get("http://localhost:8082/api/produto/")
        .then((response) => {
       
            this.setState({
                listaProdutos: response.data
            })
        })
    })
    .catch((error) => {
        this.setState({  openModal: false })
        console.log('Erro ao remover um produto.')
    })
};

   carregarLista = () => {

    axios.get("http://localhost:8082/api/produto/")
    .then((response) => {
       
        this.setState({
            listaProdutos: response.data
        })
    })
    

    axios.get("http://localhost:8082/api/categoriaproduto")
    .then((response) => {

        const dropDownCategorias = [];
        dropDownCategorias.push({ text: '', value: '' });
        response.data.map(c => (
            dropDownCategorias.push({ text: c.descricao, value: c.id })
        ))
     
        this.setState({
            listaCategoriaProduto: dropDownCategorias
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

        handleMenuFiltro = () => {
            this.state.menuFiltro === true ? this.setState({menuFiltro: false}) : this.setState({menuFiltro: true})
        }

        handleChangeCodigo = (e, {value}) => {
            this.setState({
                codigo: value
            }, () => this.filtrarProdutos())
        }

        handleChangeTitulo = (e, {value}) => {
            this.setState({
                titulo: value
            }, () => this.filtrarProdutos())
        }

        handleChangeCategoriaProduto = (e, { value }) => {
            this.setState({
                idCategoria: value,
            }, () => this.filtrarProdutos())
        }

        filtrarProdutos = () => {

            let formData = new FormData();

            formData.append('codigo', this.state.codigo);
            formData.append('titulo', this.state.titulo);
            formData.append('idCategoria', this.state.idCategoria);

            axios.post("http://localhost:8082/api/produto/filtrar", formData)
            .then((response) => {
                this.setState({
                    listaProdutos: response.data
                })
            })

        }

 render(){
    return(
        <div>

        

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> Produto </h2>

                    <Divider />

              
                    <div style={{marginTop: '4%'}}>

                    <Menu compact>
                               <Menu.Item
                                   name='menuFiltro'
                                   active={this.state.menuFiltro === true}
                                   onClick={this.handleMenuFiltro}
                               >
                                   <Icon name='filter' />
                                   Filtrar
                               </Menu.Item>
                           </Menu>

                        <Button
                            inverted
                            circular
                            icon
                            labelPosition='left'
                            color='orange'
                            floated='right'
                        >
                            <Icon name='clipboard outline' />
                            <Link to={'/form-produto'}>Novo</Link>
                        </Button>

                        { this.state.menuFiltro ?
                    <Segment>
                        <Form className="form-filtros">
                            <Form.Input
                                icon="search"
                                value={this.state.codigo}
                                onChange={this.handleChangeCodigo}
                                label='Código do Produto'
                                placeholder='Filtrar por Código do Produto'
                                labelPosition='left'
                                width={4}
                            />
                    <Form.Group widths='equal'>
                        <Form.Input
                        icon="search"
                        value={this.state.titulo}
                        onChange={this.handleChangeTitulo}
                        label='Título'
                        placeholder='Filtrar por título'
                        labelPosition='left'
                        />                              
                        <Form.Select
                        placeholder='Filtrar por Categoria'
                        label='Categoria'
                        options={this.state.listaCategoriaProduto}
                        value={this.state.idCategoria}
                        onChange={this.handleChangeCategoriaProduto}
                        /> 
                    </Form.Group>
                </Form>
            </Segment>:""
}


                        <br/><br/><br/>
                      
                      <Table color='orange' sortable celled>

                          <Table.Header>
                              <Table.Row>

                                  <Table.HeaderCell>Código do Produto</Table.HeaderCell>
                                  <Table.HeaderCell>Categoria</Table.HeaderCell>
                                  <Table.HeaderCell>Título</Table.HeaderCell>
                                  <Table.HeaderCell>Descrição</Table.HeaderCell>
                                  <Table.HeaderCell>Valor Unitário</Table.HeaderCell>
                                  <Table.HeaderCell>Tempo de Entrega Mínimo em Minutos</Table.HeaderCell>
                                  <Table.HeaderCell>Tempo de Entrega Máximo em Minutos</Table.HeaderCell>
                                  <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                              </Table.Row>
                          </Table.Header>
                     
                          <Table.Body>

                              { this.state.listaProdutos.map(produto => (
                               

                                  <Table.Row key={produto.id}>
                                      <Table.Cell>{produto.codigo}</Table.Cell>
                                      <Table.Cell>{produto.categoria ? produto.categoria.descricao : ''}</Table.Cell>
                                      <Table.Cell>{produto.titulo}</Table.Cell>
                                      <Table.Cell>{produto.descricao}</Table.Cell>
                                      <Table.Cell>{produto.valorUnitario}</Table.Cell>
                                      <Table.Cell>{produto.tempoEntregaMinimo}</Table.Cell>
                                      <Table.Cell>{produto.tempoEntregaMaximo}</Table.Cell>
                                      <Table.Cell textAlign='center'>
                                         

                                      <Button
                                    inverted
                                    circular
                                    color='green'
                                    title='Clique aqui para editar os dados deste produto'
                                    icon>
                                     <Link to="/form-produto" state={{id: produto.id}} style={{color: 'green'}}> <Icon name='edit' /> </Link> 
                                </Button> &nbsp;

                                          <Button
                                              inverted
                                              circular
                                              icon='trash'
                                              color='red'
                                              title='Clique aqui para remover este produto' 
                                              onClick={e => this.confirmaRemover(produto.id)}>
                                              <Icon name='trash'/>
                                              </Button>
                                      </Table.Cell>
                                  </Table.Row>
                              ))}

                          </Table.Body>
                          
                      </Table>
                  </div>
              </Container>
          </div>

          <Modal
                   			basic
                   			onClose={() => this.setOpenModal(false)}
                   			onOpen={() => this.setOpenModal(true)}
                   			open={this.state.openModal}
               			>
                   			<Header icon>
                       				<Icon name='trash' />
                       				<div style={{marginTop: '5%'}}> Tem certeza que deseja remover esse registro? </div>
                   			</Header>
                   			<Modal.Actions>
                       				<Button basic color='red' inverted onClick={() => this.setOpenModal(false)}>
                       					<Icon name='remove' /> Não
                       				</Button>
                       				<Button color='green' inverted onClick={() => this.remover()}>
                       					<Icon name='checkmark' /> Sim
                       				</Button>
                   			</Modal.Actions>
               			</Modal>
      </div>
   )
  }
}

export default ListProduto;
