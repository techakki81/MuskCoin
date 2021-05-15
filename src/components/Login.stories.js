import React from 'react';
import Login   from './Login';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Login',
  component: Login
};

export const FirstStory = (args) =>  {
 return <Login />
 };

FirstStory.args = {  
};
