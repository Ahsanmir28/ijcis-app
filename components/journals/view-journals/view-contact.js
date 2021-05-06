import React from 'react';
import { useQuery } from 'react-query';
import _get from 'lodash/get';
import { GET_ALL_CONTACTS } from '@/components/journals/queries';

const ViewSection = () => {
  const { data } = useQuery(['GET_ALL_CONTACTS', {}], GET_ALL_CONTACTS);
  console.log('data', data);
  return (
    <div className="col-md-5 col-md-push-1 animate-box">
      {_get(data, 'data', []).map(contact => (
        <div className="fh5co-contact-info">
          <h3>Contact Information</h3>
          <h2>{contact.affiliation}</h2>
          <ul>
            <li className="address">
              198 West 21th Street, <br /> Suite 721 New York NY 10016
            </li>
            <li className="phone">
              <a href="tel://1234567920">+ 1235 2355 98</a>
            </li>
            <li className="email">
              <a href="mailto:info@yoursite.com">info@yoursite.com</a>
            </li>
            <li className="url">
              <a href="http://freehtml5.co">freeHTML5.co</a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ViewSection;
