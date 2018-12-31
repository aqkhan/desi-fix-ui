import React from 'react';
import {
    Badge,
    Button,
    ButtonDropdown,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
    Row,
} from 'reactstrap';
import data from './channels.json';
import './channels.css';
import { AppSwitch } from '@coreui/react';

class channelList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: data.channels,
            asc: 'asc',
            enable: 'asc'
        };


    }


    componentDidMount(){
        let newdata= data.channels.sort((a, b) => {
            console.log("this is ok",a.channelName, b.channelName);
            a.channelName= a.channelName.toLowerCase();
            b.channelName = b.channelName.toLowerCase();

            return (a.channelName < b.channelName) ? -1 : (a.channelName > b.channelName) ? 1 : 0;
        });
        this.setState({data: newdata});

        console.log("this is data",newdata);
    }
    enablesort(){
        if(this.state.enable === 'asc'){
            let newdata= data.channels.sort(function(a,b){return a.details.enable - b.details.enable});
            console.log("enable sort", newdata);
            this.setState({data: newdata, enable: 'desc'});
        }
        else if(this.state.enable === 'desc'){
            let newdata= data.channels.reverse(function(a,b){return a.details.enable - b.details.enable});
            console.log("enable sort", newdata);
            this.setState({data: newdata, enable: 'asc'});
        }
    }
    reverse(){
        if(this.state.asc ==='desc'){
            console.log("doing desc");
            let newdata= data.channels.sort((a, b) => {
                console.log("this is ok",a.channelName, b.channelName);
                a.channelName= a.channelName.toLowerCase();
                b.channelName = b.channelName.toLowerCase();

                return (a.channelName < b.channelName) ? -1 : (a.channelName > b.channelName) ? 1 : 0;
            });
            console.log(newdata);
            this.setState({data: newdata, asc:'asc'});


        }
        else if(this.state.asc === 'asc'){
            console.log("this is asc");
            let newdata= data.channels.reverse((a, b) => {
                console.log("this is ok",a.channelName, b.channelName);
                a.channelName= a.channelName.toLowerCase();
                b.channelName = b.channelName.toLowerCase();
                return (a.channelName > b.channelName) ? -1 : (a.channelName < b.channelName) ? 1 : 0;
            });
            console.log(newdata);
            this.setState({data: newdata, asc: 'desc'});
        }
    }
    render(){
        return(
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12">
                        <Card>
                            <CardHeader>
                                <strong> Channel list </strong>
                                <Input type="text" className="input-ab" id="name" placeholder="Enter drama name" required />
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th>All Channels <i onClick={this.reverse.bind(this)}
                                                                    className={this.state.asc === 'asc' ? 'fa fa-chevron-down cursor-pointer':
                                                                        'fa fa-chevron-up cursor-pointer'}></i></th>
                                                <th>Channel ID </th>
                                                <th>Stream Url </th>
                                                <th>Enable/disable <i className={this.state.enable === 'asc' ? 'fa fa-chevron-down cursor-pointer':
                                                    'fa fa-chevron-up cursor-pointer'}
                                                                      onClick={this.enablesort.bind(this)}></i></th>
                                                <th>edit/delete </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.state.data.map((item, index)=>{
                                                    return(
                                                        <tr key={index}>
                                                            <td>
                                                                <p className="list-p">{item.channelName}</p>

                                                            </td>
                                                            <td>
                                                                {
                                                                    item.details.streamURL
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    item.details.ChannelID
                                                                }
                                                            </td>
                                                            <td>
                                                                <AppSwitch className={'mx-1'} color={'primary'} checked={item.details.enable} />
                                                            </td>
                                                            <td>
                                                                <button className="btn btn-primary mr-1">Edit</button>
                                                                <button className="btn btn-danger">Delete</button>
                                                            </td>
                                                        </tr>
                                                    )
                                            })
                                            }

                                            </tbody>
                                        </table>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default channelList;