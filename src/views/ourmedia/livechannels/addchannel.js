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


class addChannel extends React.Component{
    render(){
        return(
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12">
                        <Card>
                            <CardHeader>
                                <strong>Add Channel </strong>

                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12">
                                        <FormGroup>
                                            <Label htmlFor="name">Channel Name</Label>
                                            <Input type="text" id="name" placeholder="Enter Channel name" required />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <FormGroup>
                                            <Label htmlFor=""> Channel Id</Label>
                                            <Input type="text" id="" placeholder="Enter Channel channel" required />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <FormGroup>
                                            <Label htmlFor=""> Stream URL </Label>
                                            <Input type="text" id="" placeholder="Enter url" required />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <FormGroup>
                                            <Label htmlFor="">Channel Tags</Label>
                                            <Input  id="" placeholder="Channel Tags" required />
                                        </FormGroup>
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
export default addChannel;