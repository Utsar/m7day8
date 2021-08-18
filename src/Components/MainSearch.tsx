import {Form, FormControl, Row, Col, Button, Card} from 'react-bootstrap';
import "../Styles/MainSearch.css"
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { ChangeEvent, FormEvent } from 'react';
import {Result}from "../Types/Result";

export const MainSearch = () => {

    const [results, setResults] = useState<Result[]>([]);
    const [query, setQuery] = useState<string>('');


      const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setQuery(e.target.value)
    }


    const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=`

    
        const handleClick = async (e: FormEvent) => {
            e.preventDefault()
        try {
          const response = await fetch(url + query)
          console.log(response)
          const data = await response.json()
          console.log(data)
          setResults(data.results)
        } catch (error) {}
          
    }
 


    return (
        <>
        <Row className="mainSearchBar">
            <Col>
                <Form inline >
                    <FormControl type="text" 
                    placeholder="Search" 
                    value={query}
                    onInput={handleInput} 
                    className="mr-2" />
                        <Button variant="outline-success" onClick={handleClick}>Search</Button>
                </Form>
            </Col>
        </Row>
        <Col>
        <Row>
            {
                results.map((result, index) => {
                    
                   
                        <Card>
                            <Card.Img variant="top" src={result.album.cover_medium} />
                            <Card.Body>
                                <Card.Title>{result.title}</Card.Title>
                                <Card.Text>
                                    {result.artist.name}
                                </Card.Text>
                            </Card.Body>
                        </Card>
              
                })
            }
        </Row>
            </Col>
        </>
    )
}
        
