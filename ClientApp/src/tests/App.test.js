import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

describe('App', () => {
  let appWrapper;
  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  it('has state', () => {
    const appState = appWrapper.state();
    expect(appState).toBeNull();
  });

  // it('has people property on state', () => {
  //   const appState = appWrapper.state();
  //   expect(appState.people).not.toBeUndefined();
  // });

  // it('has onEdit that will change selectedPerson to person parameter', () => {
  //   const person = { firstName: 'Bilbo', lastName: 'Baggins' }
  //   appWrapper.setState({ selectedPerson: undefined }); // <-- Set initial state of App component
  //   appWrapper.instance().onEdit(person);
  //   expect(appWrapper.state().selectedPerson).toBe(person);
  // });

  // it('has onEdit that will change the selectedView to PersonEdit', () => {
  //   const person = { firstName: 'Janet', lastName: 'Jackson' }
  //   appWrapper.setState({ selectedView: undefined });
  //   appWrapper.instance().onEdit(person);
  //   expect(appWrapper.state().selectedView).toEqual('PersonEdit');
  // });

  // it('renders the edit view when state property is PersonEdit', () => {
  //   appWrapper.setState({ selectedView: 'PersonEdit' });
  //   const personEdit = appWrapper.find(PersonEdit);
  //   expect(personEdit).toHaveLength(1);
  // });
  
});