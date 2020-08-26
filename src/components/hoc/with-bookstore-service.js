import React, {useContext} from 'react'
import { BookStoreServiceContext } from '../bookstore-service-context/bookstore-service-context'

export default (Wrapped) => {  
  return (props) => {
    const context = useContext(BookStoreServiceContext);
    return <Wrapped {...props} 
    bookStoreService={context}
    /> 
  } 
}
