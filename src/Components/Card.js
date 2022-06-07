import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../Components/style.css"
import Cardsdata from './CardData'
import { ADD } from '../redux/action/action'
import { useDispatch } from 'react-redux'

export default function Cards() {
  const [data, setData] = useState(Cardsdata);
  // console.log(data);

  const dispatch = useDispatch();
  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  }
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to Cart Projects</h2>
      <div className='row'>
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem',border:'none'}} className='mx-2 mt-4 card_style'>
                  <Card.Img variant="top" src={element.imgdata} style={{height:'16rem',mt:'2rem'}}/>
  <Card.Body>
                    <Card.Title>{ element.rname}</Card.Title>
    <Card.Text>
      Price : ${element.price}
                    </Card.Text>
                    <div className='button_add'>
                      <Button variant="primary" className='col-lg-12'
                      onClick={()=>send(element)}>Add to Cart</Button>
  
                    </div>
   </Card.Body>
        </Card>
              </>
            )
          })
        }
      
        </div>
    </div>
  )
}
