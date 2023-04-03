import { CustomError } from "../../protocols";


export function notFoundError(): CustomError {
  const error: CustomError = {
    name: 'notFoundError',
    message: 'The championship you are trying to add teams to does not exist',
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
