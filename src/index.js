import {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} from './contacts.js';
import { program } from 'commander';
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contactsList = await listContacts();
      console.log(contactsList);
      break;

    case 'get':
      const getContact = await getContactById(id);
      console.log(getContact);
      break;

    case 'add':
      const addedContact = await addContact(name, email, phone);
      console.log(addedContact);
      break;

    case 'remove':
      const deleteContact = await removeContact(id);
      console.log(deleteContact);

      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(options);
