import { render, screen, waitFor } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import App from './App';
import axios from 'axios';

jest.mock('axios');
const fakeNumber = 20;
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('it renders header correctly', () => {
  axios.get.mockResolvedValue(fakeNumber);
  render(<App />);
  const linkElement = screen.getByText(/Address Book/i);
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getByText(/Check your list of contacts/i);
  expect(linkElement2).toBeInTheDocument();
});

test('it renders button correctly', () => {
  axios.get.mockResolvedValue(fakeNumber);
  render(<App />);
  const btn = screen.getByText(/Click to see/i);
  expect(btn).toBeInTheDocument();
});

test('it displays a list of contacts', async () => {
  axios.get.mockResolvedValue(fakeNumber);
  render(<App />);
  const contactList = await waitFor(() => screen.getByTestId('container'));
  expect(contactList).toBeInTheDocument();
});

test('input changes after submitting', async () => {
  axios.get.mockResolvedValue(fakeNumber);
  render(<App />);
  const input = await waitFor(() => screen.getByDisplayValue(0));
  expect(input).toBeInTheDocument();
});

test('fetches successfully data from an API', async () => {
  const data = {
    data: {
      results: [
        {
          cell: "698-583-584",
          dob: { date: "1950-11-29T17:20:54.350Z", age: 71 },
          email: "francisco.duran@example.com",
          gender: "male",
          name: { title: "Mr", first: "Francisco", last: "Duran" }
        }
      ],
    },
  };
  axios.get.mockImplementationOnce(() => Promise.resolve(data));
});

test('fetches erroneously data from an API', async () => {
  const errorMessage = 'Network Error';
  axios.get.mockImplementationOnce(() =>
    Promise.reject(new Error(errorMessage)),
  );
});