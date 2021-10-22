import React, { Component } from 'react';
import OgrenciServis from '../services/OgrenciServis';

class OgrenciListeleComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            ogrenciler: []
        }
        this.OgrenciEkle = this.OgrenciEkle.bind(this);
        this.editOgrenci = this.editOgrenci.bind(this);
        this.deleteOgrenci = this.deleteOgrenci.bind(this);
    }
    deleteOgrenci(id){
        OgrenciServis.deleteOgrenci(id).then(res =>{
        this.setState({ogrenciler: this.state.ogrenciler.filter(ogrenci => ogrenci.id !==id)});
        });

    }



    //HATAYA BAK SAAT 2:10:00
    editOgrenci(id){
        this.props.history.push(`/ogrenciguncelle/${id}`);
    }
    componentDidMount(){
        OgrenciServis.getOgrenciler().then((res) =>{
            this.setState({ogrenciler:res.data});
        });
    }

    OgrenciEkle(){
        this.props.history.push("/ogrenciolustur");
    }
    render() {
        return (
            <div>
                <h2 className ="text-center"> Öğrenci Yönetim Sistemi</h2>
                <div className = "row">
                    <button className ="btn btn-primary" onClick={this.OgrenciEkle}>Öğrenci Ekle</button>
                </div>
                <div className="row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Öğrenci İsmi</th>
                                <th>Öğrenci Soyismi</th>
                                <th>Öğrenci Numara</th>
                                <th>Öğrenci Tel.numara</th>
                                <th>Yapılacak</th>
                            </tr>
                        </thead>
                       
                        <tbody>
                            {
                                this.state.ogrenciler.map(
                                    ogrenci =>
                                    <tr key = {ogrenci.id}>
                                        <td>{ogrenci.isim} </td>
                                        <td>{ogrenci.soyisim} </td>
                                        <td>{ogrenci.numara} </td>
                                        <td>{ogrenci.telnumara} </td>
                                        <td>
                                            <button onClick = { () => this.editOgrenci(ogrenci.id)} className = "btn btn-info">Güncelle</button>
                                            <button style={{marginLeft:"10px"}} onClick ={() => this.deleteOgrenci(ogrenci.id)} className = "btn btn-danger">Sil</button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                        </table>        


                </div>
            </div>
        )
    }
}

export default OgrenciListeleComponent;