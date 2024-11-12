import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const MyVerticallyCenteredModal =(props)=>{
  const user  = props.user
  const {age,birthDate,company,address,email,firstName,lastName,id,image,phone}= user
  const {title,name} = company
  const {country}=address

 
 

  
    return (
        <Modal
        
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className='bg-[#F0F2F5]' closeButton>
          
         
        </Modal.Header>
        <Modal.Title className='bg-[#F0F2F5]'   id="contained-modal-title-vcenter ">
            <div className='text-center flex flex-col font-serif'>
              <div className='flex justify-center '>
              <img  className='w-25 h-25 '  src={image}/>

              </div>
              <div>
              {firstName} {lastName}
              <p className='text-sm text-[#989ea7]'>{title}</p>

              </div>
            </div>
           
          </Modal.Title>
        <Modal.Body className='bg-[#F0F2F5]'>
          <ul>
            <li><i class="fa-regular fa-envelope"></i>&nbsp; {email}</li>
            <li><i class="fa-solid fa-phone"></i>&nbsp;{phone}</li>
            <li><i class="fa-solid fa-location-dot"></i>&nbsp;{country}</li>
            <li><i class="fa-solid fa-cake-candles"></i>&nbsp;{birthDate}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer className='bg-[#F0F2F5]'>
          <Button className='bg-[#0056b3]' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}
export default MyVerticallyCenteredModal;