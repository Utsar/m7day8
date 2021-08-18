import {Form, FormControl, Row, Button} from 'react-bootstrap';
import "../Styles/MainSearch.css"
import {useState, useEffect} from 'react';

import { ChangeEvent } from 'react';
import {Result}from "../Types/Result";

export const MainSearch = () => {

    const [results, setResults] = useState<Result[]>([]);
    const [query, setQuery] = useState<string>('');


      const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        console.log(e.target.value)
        setQuery(e.target.value)
    }
    const handleClick = () => {
        console.log(results)
        console.log(query);
      };

    const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=`

    useEffect(() => {
        const getResults = async () => {
        try {
          let response = await fetch(url + query)
          console.log(response)
          let data = await response.json()
          console.log(data)
          setResults(data)
        } catch (error) {}
          
        }
        getResults()
      },[]);


    return (
        <>
        <Row >

            <Form inline className="mainSearchBar">
      <FormControl type="text" placeholder="Search" value={query}
                onInput={handleInput} className="mr-2" />
      <Button variant="outline-success" onClick={handleClick}>Search</Button>
    </Form>
        </Row>
            
        </>
    )
}
