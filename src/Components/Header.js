import React,{useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { NavLink, Table } from 'react-bootstrap';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import style from "../Components/style.css"
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
export default function Header() {
  const getdata = useSelector((state) => state.cartreducer.carts)
  // console.log(getdata);
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
      <>
      <Navbar bg="dark" variant="dark" style={{height:'60px'}}>
    <Container>
    <NavLink to="/" className='text-decoration-none text-light mx-3'>Navbar</NavLink>
    <Nav className="me-auto">
      <NavLink to="/"className='text-decoration-none text-light'>Home</NavLink>
      
                  </Nav>
                  <Badge badgeContent={getdata.length} color="primary"
                  id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
      <ShoppingCartIcon style={{color:'white' ,fontSize:'25px'}}/>
    </Badge>
    <div></div>
              </Container>
               <Menu
                   id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {
            getdata.length ?
              <div className='card_details' style={{ width: '24rem', padding: 10 }}>
                <Table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                        <th>Restaurant Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    { 
                      getdata.map((e) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <img src={e.imgdata} style={{ width: '5rem', height: '5rem' }} alt="" />
                              </td>
                              <td>
                                <p>{e.rname}</p>
                                <p> Price: ${e.price}</p>
                                <p>Quantiy :{e.qnty}</p>
                                <p style={{ color: 'red', fontSize: '20',cursor:'pointer' }}>
                                <DeleteIcon/>
                                </p>
                              </td>
                              <td>
                              <p style={{ color: 'red', fontSize: '20',cursor:'pointer' }}>
                                <DeleteIcon/>
                                </p></td>
                            </tr></>
                        )
                      })
                    }</tbody>
                </Table>
              </div> :
              <div className=''>
            <CloseIcon className='cors' onClick={handleClose} />
            <div className='card-style'>
              <p>your card is empty</p>
              <h1><ShoppingCartIcon/></h1>
            </div>
          </div>
          }
          
      </Menu>
  </Navbar>
      </>
  )
}
