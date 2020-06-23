import React, { Component } from 'react';
import './addprofile.css';
import history from '../../../history';
import axios from 'axios';
// import Newdashboardnav from '../../newdashboardnav/newdashboardnav';
import './addprofile.css'
import Footer from '../../footer/footer';


class addprofile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '17',
            profilephoto: '',
            profilename: '',
            profilenumber: '',
            profilegender: '',
            profileaddress: '',

        }
    }

    onimageChange = (event) => {
        this.setState({ profilephoto: event.target.files[0] })

    }
    onValuetypechange = (event) => {
        this.setState({ profilegender: event.target.value })

    }

    onnameChange = (event) => {
        this.setState({ profilename: event.target.value })

    }


    onnumberChange = (event) => {
        this.setState({ profilenumber: event.target.value })

    }

    onaddressChange = (event) => {
        this.setState({ profileaddress: event.target.value })

    }


    onSubmitaddress = (event) => {

        const headers = {

            "Content-Type": "application/json"
        }
        let ud = {
            id: this.state.id,
            image: this.state.profilephoto,
            name: this.state.profilename,
            mobile: this.state.profilenumber,
            gender: this.state.profilegender,
            address: this.state.profileaddress
        }
        console.log('form submit', this.state);
        console.log(this.state.profilephoto)
        axios.post('http://localhost:5000/users/profilechange', ud, { headers: headers }).then(res => {

            history.push('/account');
        })
    }


    render() {

        return (
            <div >
{/* 
                <Newdashboardnav /> */}
                <div id='addprofilenew'>
                    <div id='addprofilehead'>
                        <h1>Manage Profile</h1>

                    </div>
                    <input refs="name"
                        type="text"
                        id="addprofilename"
                        placeholder="Name"
                        onChange={this.onnameChange}
                    />
                    <input refs="number"
                        type="text" size="30"
                        id="addprofilenum"
                        placeholder="Phone Number"
                        onChange={this.onnumberChange}
                    />


                    <input refs="address"
                        type="text" size="30"
                        id="addprofileaddress"
                        placeholder="address"
                        onChange={this.onaddressChange}
                    />



                    <div id='addprofileradio'>
                        <input type="radio"
                            value="Male" checked={this.state.profilegender === 'Male'}
                            onChange={this.onValuetypechange}
                        /> Male
                            <input type="radio"
                            value="Female" checked={this.state.profilegender === 'Female'}
                            onChange={this.onValuetypechange}
                        /> Female

                         </div>

                    <input refs="pic"
                        type="file"
                        id='addprofilepic'
                        onChange={this.onimageChange}
                    />
                    <div >
                        <button className="addprofilebtn" id="save" onClick={this.onSubmitaddress}>Save</button>
                    </div>


                </div>
                {/* <Footer /> */}
            </div>

        )
    }
}
export default addprofile;