/* eslint-disable @typescript-eslint/ban-types */
import { Query, Resolver, Args } from '@nestjs/graphql';

@Resolver()
export class HelloResolver {
  @Query(() => String, { name: 'Saludo', description: 'Saluda a la persona' })
  helloWorld(): String {
    return `Hola bebe`;
  }

  @Query(() => String, {
    name: 'Despedida',
    description: 'Despide a la persona',
  })
  byeWorld(@Args('nombre') nombre: string): String {
    return `Adios: ${nombre}`;
  }
}
