import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { network } from './Network';

function CustomerDetail() {
    let { id } = useParams();

    const [customerDetail, setCustomerDetail] = useState({});

    useEffect(() => {
        network.getById('customers', id)
            .then(data => {
                setCustomerDetail(data);
            });
    }, [])


    return (<>
        
        <div>
            <h2>Id: {customerDetail.id}</h2>
        </div>
        <div>
            <h2>Company Name: {customerDetail.companyName}</h2>
        </div>
        <div>
            <h2>Contact Name: {customerDetail.contactName}</h2>
        </div>
        <div>
            <h2>Contact Title: {customerDetail.contactTitle}</h2>
        </div>
        <div>
            <h2>Address</h2>
        </div>
        <div style={{marginLeft:50}}>
            <h1>Street: {customerDetail.address?.street}</h1>
        </div>
        <div style={{marginLeft:50}}>
            <h1>City: {customerDetail.address?.city}</h1>
        </div>
        <div style={{marginLeft:50}}>
            <h1>Region: {customerDetail.address?.region}</h1>
        </div>
        <div style={{marginLeft:50}}>
            <h1>Postal Code: {customerDetail.address?.postalCode}</h1>
        </div>
        <div style={{marginLeft:50}}>
            <h1>Country: {customerDetail.address?.country}</h1>
        </div>
        <div style={{marginLeft:50}}>
            <h1>Phone: {customerDetail.address?.phone}</h1>
        </div>
    </>
    )
}

export default CustomerDetail