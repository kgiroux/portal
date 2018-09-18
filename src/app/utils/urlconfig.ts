import { environment } from '../../environments/environment';

export enum ServiceUrlNames {
  USER = 'users'
}

export function buildUrl(url: string): string {
  return `${environment.protocol.http}://${environment.backOfficeAddr}:${environment.portBackOffice}/${url}`;
}

export function serviceUrl(service: ServiceUrlNames, url: string): string {
  return buildUrl(service + url);
}
