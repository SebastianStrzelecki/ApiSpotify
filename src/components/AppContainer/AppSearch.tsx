import React from 'react';
import { getSearchEntitiesFetch } from '../../Search/search'
import { connect } from 'react-redux';
import { IRootState } from '../../config/store';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export interface ISearchProps extends StateProps,DispatchProps{}

export interface INewsProps {
    search:string
}
export class AppSearch extends React.Component<ISearchProps,INewsProps,{}>{
    state = {
        search:''
    }

    search = (event:any) =>{
        event.preventDefault();
        this.props.getSearchEntitiesFetch(this.state.search);
        
    }
    changeSearch = (e:any) =>{
        this.setState({
            search: e.target.value
        })
    }
    render() {
        return (
    <div className="App">
    <Form onSubmit={this.search}>
        <FormGroup>
            <Label for="search">Search</Label>
            <Input type="text" name="search" id="search" onChange={this.changeSearch}/>
        </FormGroup>
        <Button>Search</Button>
    </Form>
      <header className="App-header">
        <p>
         New App.
        </p>
        {/* <button onClick={this.search}>Click</button> */}
      </header>
    </div>
    )
  }
}

const mapStateToProps = ({ stateAlbums }: IRootState) => ({
    loading: stateAlbums.loading,
    items: stateAlbums.search
  });
  
  const mapDispatchToProps = {
    getSearchEntitiesFetch 
  };
  
  type StateProps = ReturnType<typeof mapStateToProps>;
  type DispatchProps = typeof mapDispatchToProps;

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppSearch);