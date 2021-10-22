import React, { Component } from 'react';
import OgrenciServis from '../services/OgrenciServis';

class OgrenciOlusturComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            isim:'',
            soyisim: '',
            numara:'',
            telnumara:''
        }
        this.changeİsimHandler = this.changeİsimHandler.bind(this);
        this.changeSoyisimHandler = this.changeSoyisimHandler.bind(this);
        this.changeNumaraHandler = this.changeNumaraHandler.bind(this);
        this.changeTelnumaraHandler = this.changeTelnumaraHandler.bind(this);
        this.saveOgrenci = this.saveOgrenci.bind(this);

    }  
    saveOgrenci = (e) => {
        e.preventDefault();
        let ogrenci = {isim: this.state.isim, soyisim: this.state.soyisim, numara: this.state.numara, telnumara: this.state.telnumara };
        console.log('ogrenci =>' +JSON.stringify(ogrenci));

        OgrenciServis.OgrenciOlustur(ogrenci).then(res =>{
            this.props.history.push('/ogrenciler');
        });


    }
    changeİsimHandler =(event) => {
        this.setState({isim: event.target.value});
    }

    changeSoyisimHandler =(event) => {
        this.setState({soyisim: event.target.value});
    }

    changeNumaraHandler =(event) => {
        this.setState({numara: event.target.value});
    }

    changeTelnumaraHandler =(event) => {
        this.setState({telnumara: event.target.value});
    }
    cancel(){
        this.props.history.push("/ogrenciler");
    }
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row"> 
                        <div className = "card col-md-6 offset-md-3 offset-md-3"> 
                            <h3 className="text-center">Öğrenci Ekle</h3>
                            <div className = "card-body"> 
                                <form>
                                    <div className="form-group">
                                        <label > Öğrenci İsmi: </label>
                                        <input placeholder="Öğrenci İsmi" name="İsim" className="form-control" 
                                            value ={this.state.isim} onChange={this.changeİsimHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label > Öğrenci Soyismi: </label>
                                        <input placeholder="Öğrenci Soyismi" name="Soyisim" className="form-control" 
                                            value ={this.state.soyisim} onChange={this.changeSoyisimHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label > Öğrenci Numara: </label>
                                        <input placeholder="Öğrenci Numara" name="Numara" className="form-control" 
                                            value ={this.state.numara} onChange={this.changeNumaraHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label > Öğrenci Telnumara: </label>
                                        <input placeholder="Öğrenci Telnumara" name="Telnumara" className="form-control" 
                                            value ={this.state.telnumara} onChange={this.changeTelnumaraHandler}/>
                                    </div>

                                    <button className= "btn btn-success" onClick={this.saveOgrenci}>Kaydet</button>
                                    <button className= "btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>İptal</button>


                                </form>
                            
                            </div>


                        </div>


                    </div>
                </div>
                
            </div>
        );
    }
}

export default OgrenciOlusturComponent;