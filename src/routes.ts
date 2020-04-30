import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response){

    const user = createUser({
      name: 'Françuel', 
      email: 'fran@gmail.com', 
      password: '123456',
      techs: ['NodeJs', {title: 'ReactJS', experience: 100}]
    });

  return response.json({message: 'Hello World'});
}