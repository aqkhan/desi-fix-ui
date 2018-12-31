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

class addMovie extends React.Component{
    render(){
        return(
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12">
                        <Card>
                            <CardHeader>
                                <strong>Add Movie </strong>

                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12">
                                        <FormGroup>
                                            <Label htmlFor="name">Movie Title</Label>
                                            <Input type="text" id="name" placeholder="Enter movie title" required />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <FormGroup>
                                            <Label htmlFor=""> Movie Url</Label>
                                            <Input type="text" id="" placeholder="Enter Url" required />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <FormGroup>
                                            <Label htmlFor=""> Starring</Label>
                                            <Input type="text" id="" placeholder="Starring" required />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <FormGroup>
                                            <Label htmlFor="">Tags</Label>
                                            <Input  id="" placeholder="Tags" required />
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
export default addMovie;