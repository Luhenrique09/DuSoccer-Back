import { CustomError } from "../../protocols";


export function notFoundError(name: string): CustomError {
  const error: CustomError = {
    name: 'notFoundError',
    message: `The ${name} does not exist`,
  };
  return error;
}

export function exceedError(numTeam: number) : CustomError {
  const error: CustomError = {
    name: 'ExceedError',
    message: `Number of teams must not exceed: ${numTeam}`
  }
  return error;
}
