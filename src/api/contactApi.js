import axios from 'axios';

const ContactsApiInstance = axios.create({
    baseURL: 'https://randomuser.me/api/',
  });

const ContactsApi = (nat='', gender='') =>
ContactsApiInstance.get(`?format=json&results=20&inc=name,picture,email,cell,gender,nat&nat=${nat}&gender=${gender}`);

export default ContactsApi;