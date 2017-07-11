import { css } from 'glamor';
import glamorous from 'glamorous';

export const Page = glamorous.section({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#313131',
});

export const Form = glamorous.form({
  width: 400,
  flexDirection: 'column',
  display: 'flex',
});

export const Header = glamorous.section({});
export const Input = glamorous.input({
  padding: '20px 10px',
  margin: '5px 0',
  fontSize: 18,
  textTransform: 'uppercase',
  border: '1px solid #fff',



  '::-webkit-input-placeholder': {
    color: 'lightgray',
  }
});
export const H1 = glamorous.h1({});
export const H4 = glamorous.h4({});
