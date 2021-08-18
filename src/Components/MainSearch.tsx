import {Form, FormControl, Row, Button} from 'react-bootstrap';
import "../Styles/MainSearch.css"
import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { ChangeEvent } from 'react';

export const MainSearch = () => {

    const [results, setResults] = useState('')
    const [query, setQuery] = useState("")

    const history = useHistory()

    const search = () => {
        history.push("/search?q=" + query)
      }

      const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setQuery(e.target.value)
    }

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
      <Button variant="outline-success" onClick={search}>Search</Button>
    </Form>
        </Row>
            
        </>
    )
}
