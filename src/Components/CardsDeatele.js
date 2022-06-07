import React from 'react'
import Table from 'react-bootstrap/Table'
import DeleteIcon from '@mui/icons-material/Delete';
export default function CardsDeatele() {
  return (
    <>
      <div className="container mt-2">
      <h2 className='text-center'>Iteams Details Page</h2>
        <section className='container mt-3'>
          <div className='iteamsdetails'>
            <div className='items_img'>
              <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" alt="" />
            </div>
            <div className='details'>
              <Table>
                <tr>
                  <td>
                    <p><storng>Restaurant</storng> :Massala Theorry</p>
                    <p><storng>Price</storng> :$300</p>
                    <p><storng>Dishes</storng> :north indian ,biryani</p>
                    <p><storng>Total</storng> :$300</p>
                  
                  </td>
                  <td>
                    <p><storng>Rating</storng> <span style={{background:'green', color:'#fff', padding:'2px 5px' ,borderRadius:'5px'}}> 3.5 *</span></p>
                    <p><storng>Order Review</storng> <span>1175 + order placed from here recently</span></p>
                    <p><storng>Remove</storng><span><DeleteIcon style={{color:'red', fontSize:'20', cursor:'pointer'}}/></span></p>
                    
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
